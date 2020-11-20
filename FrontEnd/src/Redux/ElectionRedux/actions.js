import { ADD_CITY_FAILURE, ADD_CITY_REQUEST, ADD_CITY_SUCCESS, ALL_CITY_FAILURE, ALL_CITY_REQUEST, ALL_CITY_SUCCESS, GET_CITY_FAILURE, GET_CITY_REQUEST, GET_CITY_SUCCESS, FILTER_SORT_CITY_FAILURE, FILTER_SORT_CITY_REQUEST, FILTER_SORT_CITY_SUCCESS, SEARCH_CITY_FAILURE, SEARCH_CITY_REQUEST, SEARCH_CITY_SUCCESS, EDIT_CITY_FAILURE, EDIT_CITY_REQUEST, EDIT_CITY_SUCCESS, DELETE_CITY_FAILURE, DELETE_CITY_REQUEST, DELETE_CITY_SUCCESS } from "./actionType"
import axios from "axios"

// to add Cities

export const addCityRequest = () => ({
    type: ADD_CITY_REQUEST
})

export const addCitySuccess = (payload) => ({
    type: ADD_CITY_SUCCESS,
    payload
})

export const addCityFailure = (payload) => ({
    type: ADD_CITY_FAILURE,
    payload
})

export const addCity = (payload) => (dispatch) => {
    dispatch(addCityRequest())
    axios
        .post("http://localhost:5000/city", payload)
        .then(res => console.log(res))
        .catch(err => dispatch(addCityFailure(err)))
}

// to get all Cities

export const allCityRequest = () => ({
    type: ALL_CITY_REQUEST
})

export const allCitySuccess = (payload) => ({
    type: ALL_CITY_SUCCESS,
    payload
})

export const allCityFailure = (payload) => ({
    type: ALL_CITY_FAILURE,
    payload
})

export const allCity = (payload) => (dispatch) => {
    dispatch(allCityRequest())
    axios
        .get(`http://localhost:5000/cities/all?sort=${sort}&page=${page}&type=${type}`)
        .then(res => console.log(res))
        .catch(err => dispatch(allCityFailure(err)))
}

// to get cities after login

export const getCityRequest = () => ({
    type: GET_CITY_REQUEST
})

export const getCitySuccess = (payload) => ({
    type: GET_CITY_SUCCESS,
    payload
})

export const getCityFailure = (payload) => ({
    type: GET_CITY_FAILURE,
    payload
})

export const getCity = ({ district_id, page }) => (dispatch) => {
    dispatch(getCityRequest())
    axios
        .get(`http://localhost:5000/cities?district_id=${district_id}&page=${page}`)
        .then(res => console.log(res))
        .catch(err => dispatch(getCityFailure(err)))
}

// to get cities from the Sort and Filter when user is Logged in

export const filterSortCityRequest = () => ({
    type: FILTER_SORT_CITY_REQUEST
})

export const filterSortCitySuccess = (payload) => ({
    type: FILTER_SORT_CITY_SUCCESS,
    payload
})

export const filterSortCityFailure = (payload) => ({
    type: FILTER_SORT_CITY_FAILURE,
    payload
})

export const filterSortCity = ({ district_id, page, type, sort }) => (dispatch) => {
    dispatch(filterSortCityRequest())
    axios
        .get(`http://localhost:5000/cities/sort-filter?district_id=${district_id}&page=${page}&type=${type}$sort=${sort}`)
        .then(res => console.log(res))
        .catch(err => dispatch(filterSortCityFailure(err)))
}

// to Search the city by name

export const searchCityRequest = () => ({
    type: SEARCH_CITY_REQUEST
})

export const searchCitySuccess = (payload) => ({
    type: SEARCH_CITY_SUCCESS,
    payload
})

export const searchCityFailure = (payload) => ({
    type: SEARCH_CITY_FAILURE,
    payload
})

export const searchCity = ({ district_id, page, type, sort }) => (dispatch) => {
    dispatch(searchCityRequest())
    axios
        .get(`http://localhost:5000/city/search?district_id=${district_id}&name=${name}`)
        .then(res => console.log(res))
        .catch(err => dispatch(searchCityFailure(err)))
}

// to edit the city

export const editCityRequest = () => ({
    type: SEARCH_CITY_REQUEST
})

export const editCitySuccess = (payload) => ({
    type: SEARCH_CITY_SUCCESS,
    payload
})

export const editCityFailure = (payload) => ({
    type: SEARCH_CITY_FAILURE,
    payload
})

export const editCity = ({ payload }) => (dispatch) => {
    dispatch(editCityRequest())
    axios
        .post(`http://localhost:5000/city/edit/${payload._id}`, payload)
        .then(res => console.log(res))
        .catch(err => dispatch(editCityFailure(err)))
}

//to delete City Data

export const deleteCityRequest = () => ({
    type: SEARCH_CITY_REQUEST
})

export const deleteCitySuccess = (payload) => ({
    type: SEARCH_CITY_SUCCESS,
    payload
})

export const deleteCityFailure = (payload) => ({
    type: SEARCH_CITY_FAILURE,
    payload
})

export const deleteCity = ({ id }) => (dispatch) => {
    dispatch(deleteCityRequest())
    axios
        .delete(`http://localhost:5000/city/edit/${id}`)
        .then(res => console.log(res))
        .catch(err => dispatch(deleteCityFailure(err)))
}