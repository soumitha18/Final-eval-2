import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
} from "./actionTypes";

import { loadData, saveData } from "../localStorage";

export const initialState = {
    isLoading: false,
    isError: false,
    userData: loadData("docUser") || [],
    errMsg: "",
    auth: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                errMsg: "",
            };

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                errMsg: "",
                auth: true,
            };

        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errMsg: action.payload,
            };

        case LOGIN_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                errMsg: "",
            };

        case LOGIN_USER_SUCCESS:
            saveData("docUser", action.payload.user);
            return {
                ...state,
                isLoading: false,
                isError: false,
                errMsg: "",
                auth: true,
                userData: action.payload.user,
            };

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errMsg: action.payload,
            };

        default:
            return state;
    }
};