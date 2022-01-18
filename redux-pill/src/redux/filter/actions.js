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

import { asyncGetProperties } from '../../api/jsonserver';
// filter functions
export const filterbyTypes = (checkValues = initialState, action) => {
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);

    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
};



export const filterbyCondition = (checkValues = initialState, action) => {
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
}
export const filterbyRooms = (checkValues = initialState, action) => {
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
}
export const filterbyBathrooms = (checkValues = initialState, action) => {
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
}
export const filterbySize = (checkValues = initialState, action) => {
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
}
export const filterbyPrice = () => {
    return {
        type: FILTER_PRICE,
    }
}
export const filterbyPet = (checkValues = initialState, action) => {
    console.log(action)
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
}
export const filterbyGarden = (checkValues = initialState, action) => {
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
}
export const filterbyAirConditioning = (checkValues = initialState, action) => {
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
}
export const filterbySwimmingPool = (checkValues = initialState, action) => {
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
}
export const filterbyTerrace = (checkValues = initialState, action) => {
    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    if (index !== -1) {
        checkValues.filters[action.propertyElement].splice(index, 1);
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }

    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, index);

    return { ...checkValues }
}

export const filterbyDate = (checkValues = initialState, action) => {

    const index = checkValues.filters[action.propertyElement].indexOf(action.value);
    const valueLength = checkValues.filters[action.propertyElement].length
    if (valueLength !== 0) {
        checkValues.filters[action.propertyElement].splice(index, 1);
        checkValues.filters[action.propertyElement].push(action.value)
    } else {
        checkValues.filters[action.propertyElement].push(action.value)
    }
    console.log(checkValues.filters)
    console.log(action.value, action.propertyElement, valueLength);
    return { ...checkValues }
}

export const getProperties = () => {
    return async (dispatch) => {
        const { data } = await asyncGetProperties();
        console.log(data)
    }
}