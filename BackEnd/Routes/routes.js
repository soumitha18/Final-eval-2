const express = require("express")
const { registration, login, postCities, getCities, getCitySearch, editCity, deleteCity, getCitiesBySortAndFilter, getAllCities } = require("../Controllers/Controllers");

const router = express.Router();

router.post("/login", login)

router.post("/register", registration)

router.post("/city", postCities)

router.get("/cities/all", getAllCities)

router.get("/cities", getCities)

router.get("/cities/sort-filter", getCitiesBySortAndFilter)

router.get("/city/search", getCitySearch)

router.post("/city/edit/:id", editCity)

router.delete("/city/delete/:id", deleteCity)

module.exports = router
