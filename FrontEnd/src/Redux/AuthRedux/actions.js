import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT
} from "./actionType";

import axios from "axios";

// register user

export const registerUserRequest = () => ({
    type: REGISTER_USER_REQUEST,
});

export const registerUserSuccess = (payload) => ({
    type: REGISTER_USER_SUCCESS,
    payload,
});

export const registerUserFailure = (payload) => ({
    type: REGISTER_USER_FAILURE,
    payload,
});

export const registerUser = (payload) => (dispatch) => {
    dispatch(registerUserRequest());
    axios
        .post("http://localhost:5000/register", payload)
        .then((res) => {
            dispatch(registerUserSuccess(res.data));
        })
        .catch((err) => dispatch(registerUserFailure(err)));
};

// login a user

export const loginUserRequest = () => ({
    type: LOGIN_USER_REQUEST,
});

export const loginUserSuccess = (payload) => ({
    type: LOGIN_USER_SUCCESS,
    payload,
});

export const loginUserFailure = (payload) => ({
    type: LOGIN_USER_FAILURE,
    payload,
});

export const loginUser = (payload) => (dispatch) => {
    dispatch(loginUserRequest());
    axios
        .post("http://localhost:5000/login", payload)
        .then((res) => {
            dispatch(loginUserSuccess(res.data));
        })
        .catch((err) => loginUserFailure(err));
};

export const logout = () => ({
    type: LOGOUT
})