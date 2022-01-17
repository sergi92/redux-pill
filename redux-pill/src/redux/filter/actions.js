import { initialState } from './state';
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


// filter functions
export const filterbyTypes = (checkValues = initialState, action) => {

    const { propertiesData } = checkValues


    const filteredProperties = Object.values(propertiesData).filter(property => property.type === action.value);
    checkValues.propertiesData = filteredProperties
    return checkValues


};

export const filterbyCondition = () => {
    return {
        type: FILTER_CONDITION,
    }
}
export const filterbyRooms = () => {
    return {
        type: FILTER_ROOMS,
    }
}
export const filterbyBathrooms = () => {
    return {
        type: FILTER_BATHROOMS,
    }
}
export const filterbySize = () => {
    return {
        type: FILTER_SIZE,
    }
}
export const filterbyPrice = () => {
    return {
        type: FILTER_PRICE,
    }
}
export const filterbyPet = () => {
    return {
        type: FILTER_PET,
    }
}
export const filterbyGarden = () => {
    return {
        type: FILTER_GARDEN,
    }
}
export const filterbyAirConditioning = () => {
    return {
        type: FILTER_AIR_CONDITIONING,
    }
}
export const filterbySwimmingPool = () => {
    return {
        type: FILTER_SWIMMING_POOL,
    }
}
export const filterbyTerrace = () => {
    return {
        type: FILTER_TERRACE,
    }
}

export const filterbyDate = () => {
    return {
        type: FILTER_DATE,
    }
}
