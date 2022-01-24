import { getProperties } from '../../api/jsonserver';
import {
    PROPERTIES_FETCH,
    PROPERTIES_SET_ERROR,
    PROPERTIES_SET_RESULT,
    PROPERTIES_RESET,
    PROPERTIES_LOADING
} from './types';

function setPropertiesLoading() {
    return { type: PROPERTIES_LOADING };
}

function setPropertiesResult(result) {
    return { type: PROPERTIES_SET_RESULT, payload: result };
}

function setPropertiesError(error) {
    return { type: PROPERTIES_SET_ERROR, payload: error };
}

export function fetchProperties(filter) {
    return async (dispatch) => {
        dispatch(setPropertiesLoading());
        try {
            const result = await getProperties(filter);
            console.log(filter);
            dispatch(setPropertiesResult(result));
            console.log(result);
        } catch (error) {
            dispatch(setPropertiesError(error));
        }
    };
}

