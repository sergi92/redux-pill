// action switch
import {
    FILTER_TYPE,
    FILTER_CONDITION,
    FILTER_ROOMS,
    FILTER_BATHROOMS,
    FILTER_SIZE,
    FILTER_PRICE,
    FILTER_PET,
    FILTER_GARDEN,
    FILTER_AIR_CONDITIONING,
    FILTER_SWIMMING_POOL,
    FILTER_TERRACE,
    FILTER_DATE,
} from './types';

import { initialState } from './state';

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_TYPE:
            return {
                ...state,
                filter: action.filter
            }
        case FILTER_CONDITION:

            return {
                ...state,
                filter: action.filter
            }
        case FILTER_ROOMS:

            return {
                ...state,
                filter: action.filter
            }
        case FILTER_BATHROOMS:

            return {
            }
        case FILTER_SIZE:

            return {
            }
        case FILTER_PRICE:

            return {
            }
        case FILTER_PET:

            return {
            }
        case FILTER_GARDEN:

            return {
            }
        case FILTER_AIR_CONDITIONING:

            return {
            }
        case FILTER_SWIMMING_POOL:

            return {
            }
        case FILTER_TERRACE:

            return {
            }
        case FILTER_DATE:

            return {
            }

        default:
            return state
    }
}

export default filterReducer;