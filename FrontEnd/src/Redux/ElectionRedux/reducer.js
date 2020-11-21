import { ADD_CITY_FAILURE, ADD_CITY_REQUEST, ADD_CITY_SUCCESS, ALL_CITY_FAILURE, ALL_CITY_REQUEST, ALL_CITY_SUCCESS, GET_CITY_FAILURE, GET_CITY_REQUEST, GET_CITY_SUCCESS, FILTER_SORT_CITY_FAILURE, FILTER_SORT_CITY_REQUEST, FILTER_SORT_CITY_SUCCESS, SEARCH_CITY_FAILURE, SEARCH_CITY_REQUEST, SEARCH_CITY_SUCCESS, EDIT_CITY_FAILURE, EDIT_CITY_REQUEST, EDIT_CITY_SUCCESS, DELETE_CITY_FAILURE, DELETE_CITY_REQUEST, DELETE_CITY_SUCCESS, HANDLE_STATE } from "./actionType"

export const initialState = {
    err: "",
    data: [],
    isEdit: false,
    isDelete: false,
    isAdd: false,
    count: 0,
    totalPages: 0,
    page: 1,
    limit: 5
}

const reducer = (state = initialState, action) => {
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
        case ALL_CITY_REQUEST:
            return {
                ...state
            }
        case ALL_CITY_SUCCESS:
            return {
                ...state,
                data: action.payload.cities,
                count: action.payload.count,
                totalPages: action.payload.totalPages,
                page: action.payload.page,
                limit: action.payload.limit
            }
        case ALL_CITY_FAILURE:
            return {
                ...state,
                err: action.payload
            }
        case GET_CITY_REQUEST:
            return {
                ...state
            }
        case GET_CITY_SUCCESS:
            return {
                ...state,
                data: action.payload.cities,
                count: action.payload.count,
                totalPages: action.payload.totalPages,
                page: action.payload.page,
                limit: action.payload.limit
            }
        case GET_CITY_FAILURE:
            return {
                ...state,
                err: action.payload
            }
        case FILTER_SORT_CITY_REQUEST:
            return {
                ...state
            }
        case FILTER_SORT_CITY_SUCCESS:
            return {
                ...state,
                data: action.payload.cities,
                count: action.payload.count,
                totalPages: action.payload.totalPages,
                page: action.payload.page,
                limit: action.payload.limit
            }
        case FILTER_SORT_CITY_FAILURE:
            return {
                ...state,
                err: action.payload
            }
        case SEARCH_CITY_REQUEST:
            return {
                ...state
            }
        case SEARCH_CITY_SUCCESS:
            return {
                ...state,
                data: action.payload.cities,
                count: action.payload.count,
                totalPages: 1,
                page: 1
            }
        case SEARCH_CITY_FAILURE:
            return {
                ...state,
                err: action.payload
            }
        case EDIT_CITY_REQUEST:
            return {
                ...state
            }
        case EDIT_CITY_SUCCESS:
            return {
                ...state,
                isEdit: true
            }
        case EDIT_CITY_FAILURE:
            return {
                ...state,
                err: action.payload
            }
        case DELETE_CITY_REQUEST:
            return {
                ...state
            }
        case DELETE_CITY_SUCCESS:
            return {
                ...state,
                isDelete: true
            }
        case DELETE_CITY_FAILURE:
            return {
                ...state,
                err: action.payload
            }
        case HANDLE_STATE:
            return {
                ...state,
                isAdd: false,
                isDelete: false,
                isEdit: false
            }
        default:
            return state;
    }
};

export default reducer