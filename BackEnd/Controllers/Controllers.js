const { loginValidation, registerValidation, cityValidation } = require("../Validation/Validation")
const User = require("../Models/User")
const City = require("../Models/City")
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")

const registration = async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
        return res.status(400).send("Email already exists in the database");
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        district: req.body.district
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
}

const login = async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).send("Email or password is wrong");
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");
    res.send(user);
}

const postCities = async (req, res) => {
    const { error } = cityValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const city = new City({
        school_id: req.body.school_id,
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        classes: req.body.classes
    });

    try {
        const savedCity = await city.save();
        res.send(savedCity);
    } catch (err) {
        res.status(400).send(err);
    }
}

const getAllCities = async (req, res) => {
    try {
        if (req.query.sort == "") {
            sort = (req.query.sort === 'asc' ? 1 : -1)
        }
        else {
            sort = 0
        }
        const page = parseInt(req.query.page) || 1;
        const limit = 5;

        const search_params = {}
        if (req.query.type != "") {
            search_params['type'] = req.query.type
        }

        let cities = await City.find(search_params)
            .sort({ population: sort })
            .skip((page - 1) * limit)
            .limit(limit);

        const count = await City.countDocuments(search_params).exec();
        const totalPages = Math.ceil(count / limit);
        res.status(200).json({ cities, count, totalPages, page, limit });
    } catch (err) {
        res.status(400).send(err.message);

    }
}

const getCities = async (req, res) => {
    try {
        if (!req.query.district_id) {
            return res.status(400).send('Missing user query');
        }
        const page = parseInt(req.query.page) || 1;
        const limit = 5;

        const search_params = { school_id: mongoose.Types.ObjectId(req.query.district_id) };

        let cities = await City.find(search_params)
            .skip((page - 1) * limit)
            .limit(limit);

        const count = await City.countDocuments(search_params).exec();
        const totalPages = Math.ceil(count / limit);
        res.status(200).json({ cities, count, totalPages, page, limit });
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const getCitiesBySortAndFilter = async (req, res) => {
    try {
        if (!req.query.district_id) {
            return res.status(400).send('Missing user query');
        }
        const page = parseInt(req.query.page) || 1;
        const limit = 5, sort
        if (req.query.sort == "") {
            sort = (req.query.sort === 'asc' ? 1 : -1)
        }
        else {
            sort = 0
        }

        const search_params = { school_id: mongoose.Types.ObjectId(req.query.district_id) };
        if (req.query.type != "") {
            search_params['type'] = req.query.type;
        }
        let cities = await City.find(search_params)
            .sort({ population: sort })
            .skip((page - 1) * limit)
            .limit(limit);

        const count = await City.countDocuments(search_params).exec();
        const totalPages = Math.ceil(count / limit);
        res.status(200).json({ cities, count, totalPages, page, limit });
    } catch (err) {
        res.status(400).send(err.message);

    }
}

const getCitySearch = async (req, res) => {
    try {
        const name = req.query.name.toLowerCase()
        const search_params = { school_id: mongoose.Types.ObjectId(req.query.district_id) };

        let cities = await City.find(search_params)

        let result = cities.filter(item => item.name.toLowerCase().includes(name))

        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

const editCity = async (req, res) => {
    City.findById(req.params.id)
        .then(city => {
            city.name = req.body.name,
                city.gender = req.body.gender,
                city.age = req.body.age,
                city.classes = req.body.classes

            city.save()
                .then(() => res.json("City Data updated Successfully!"))
                .catch(err => res.status(400).json(`Error : ${err}`))
        })
        .catch(err => res.status(400).json(`ERROR : ${err}`))
}

const deleteCity = async (req, res) => {
    const id = req.params.id
    City.findByIdAndDelete(id)
        .then(() => res.json("City Data deleted Successfully!"))
        .catch(err => res.status(400).json(`Error : ${err}`))
}


module.exports = { registration, login, postCities, getAllCities, getCities, getCitySearch, editCity, deleteCity, getCitiesBySortAndFilter }
