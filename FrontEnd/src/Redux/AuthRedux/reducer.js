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
    userData: loadData("userData") || [],
    err: "",
    auth: loadData("auth") || false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                err: "",
            };

        case REGISTER_USER_SUCCESS:
            saveData("userData", action.payload);
            saveData("auth", true)
            return {
                ...state,
                err: "",
                auth: true,
                userData: action.payload
            };

        case REGISTER_USER_FAILURE:
            return {
                ...state,
                err: action.payload.response.data,
            };

        case LOGIN_USER_REQUEST:
            return {
                ...state,
                err: "",
            };

        case LOGIN_USER_SUCCESS:
            saveData("userData", action.payload);
            saveData("auth", true)
            return {
                ...state,
                err: "",
                auth: true,
                userData: action.payload,
            };

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                err: action.payload.response.data,
            };
        case LOGOUT:
            saveData("userData", []);
            saveData("auth", false)
            return {
                ...state,
                auth: false
            };
        default:
            return state;
    }
};

export default reducer