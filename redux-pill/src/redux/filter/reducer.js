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
    GET_PROPERTIES
} from './types';

import { initialState } from './state';
import {
    filterbyTypes,
    filterbyCondition,
    filterbyRooms,
    filterbyBathrooms,
    filterbySize,
    filterbyPrice,
    filterbyPet,
    filterbyGarden,
    filterbyAirConditioning,
    filterbySwimmingPool,
    filterbyTerrace,
    filterbyDate,
} from './actions';
// import { getProperties } from '../../api/jsonserver';

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_TYPE:
            return filterbyTypes(state, action)

        case FILTER_CONDITION:

            return filterbyCondition(state, action)

        case FILTER_ROOMS:
            return filterbyRooms(state, action)
        case FILTER_BATHROOMS:

            return filterbyBathrooms(state, action)
        case FILTER_SIZE:

            return filterbySize(state, action)
        case FILTER_PRICE:

            return filterbyPrice(state, action)
        case FILTER_PET:

            return filterbyPet(state, action)
        case FILTER_GARDEN:

            return filterbyGarden(state, action)
        case FILTER_AIR_CONDITIONING:

            return filterbyAirConditioning(state, action)
        case FILTER_SWIMMING_POOL:

            return filterbySwimmingPool(state, action)
        case FILTER_TERRACE:

            return filterbyTerrace(state, action)
        case FILTER_DATE:

            return filterbyDate(state, action)
        case GET_PROPERTIES:
        return 

        default:
            return state
    }
}

export default filterReducer;