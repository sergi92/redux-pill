import initialState from './state';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case LOGIN_FAIL:
            return {
                ...state,
                ...action.payload
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
}

export default userReducer