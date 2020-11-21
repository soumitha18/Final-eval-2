import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT
} from "./actionType";

import { loadData, saveData } from "../localStorage";

export const initialState = {
    userData: loadData("docUser") || [],
    err: "",
    auth: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                err: "",
            };

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                err: "",
                auth: true,
                userData: action.payload
            };

        case REGISTER_USER_FAILURE:
            return {
                ...state,
                err: action.payload,
            };

        case LOGIN_USER_REQUEST:
            return {
                ...state,
                err: "",
            };

        case LOGIN_USER_SUCCESS:
            saveData("docUser", action.payload);
            return {
                ...state,
                err: "",
                auth: true,
                userData: action.payload,
            };

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                err: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                auth: false
            };
        default:
            return state;
    }
};