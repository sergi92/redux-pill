import { PROPERTIES_RESET, PROPERTIES_LOADING, PROPERTIES_SET_RESULT, PROPERTIES_SET_ERROR } from "./types";
import initialState from "./state";


export default function propertiesReducer(state = initialState, action) {
    switch (action.type) {
        case PROPERTIES_RESET:
            return { result: [], error: undefined, status: "idle" };
        case PROPERTIES_LOADING:
            return { result: [], error: undefined, status: "loading" };
        case PROPERTIES_SET_RESULT:
            return { result: action.payload, error: undefined, status: "success" };
        case PROPERTIES_SET_ERROR:
            return { result: [], error: action.payload, status: "error" };
        default:
            return state;
    }
}