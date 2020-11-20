import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import authReducer from "./AuthRedux/reducer";
import electionReducer from "./ElectionRedux/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    Auth: authReducer,
    Election: electionReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);