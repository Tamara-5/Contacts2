import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";
import FilterRedcer from "./FilterREducer";

export default combineReducers({
    contact:ContactReducer,
    filters:FilterRedcer
})