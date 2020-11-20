import { ADD_CITY_FAILURE, ADD_CITY_REQUEST, ADD_CITY_SUCCESS, ALL_CITY_FAILURE, ALL_CITY_REQUEST, ALL_CITY_SUCCESS, GET_CITY_FAILURE, GET_CITY_REQUEST, GET_CITY_SUCCESS, FILTER_SORT_CITY_FAILURE, FILTER_SORT_CITY_REQUEST, FILTER_SORT_CITY_SUCCESS, SEARCH_CITY_FAILURE, SEARCH_CITY_REQUEST, SEARCH_CITY_SUCCESS, EDIT_CITY_FAILURE, EDIT_CITY_REQUEST, EDIT_CITY_SUCCESS, DELETE_CITY_FAILURE, DELETE_CITY_REQUEST, DELETE_CITY_SUCCESS } from "./actionType"

export const initialState = {
    err: "",
    data: [],
    isEdit: false,
    isDelete: false,
    isAdd: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY_REQUEST:
            return {
                ...state
            };

        case ADD_CITY_SUCCESS:
            return {
                ...state,
                isAdd: true
            };

        case ADD_CITY_FAILURE:
            return {
                ...state,
                err: ""
            };

        case :
            return {
                ...state,
                isLoading: true,
                isError: false,
                err: "",
            };

        case LOGIN_USER_SUCCESS:
            saveData("docUser", action.payload.user);
            return {
                ...state,
                isLoading: false,
                isError: false,
                err: "",
                auth: true,
                userData: action.payload.user,
            };

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                err: action.payload,
            };

        default:
            return state;
    }
};