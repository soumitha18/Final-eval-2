const express = require("express")
const { registration, login, postCities, getCities, getCityInfo, editCity, deleteCity } = require("../Controllers/Controllers");

const router = express.Router();

router.post("/login", login)

router.post("/register", registration)

router.post("/city", postCities)

router.get("/cities", getCities)

router.get("/city", getCityInfo)

router.post("/city/edit/:id", editCity)

router.delete("/city/delete/:id", deleteCity)

module.exports = router
