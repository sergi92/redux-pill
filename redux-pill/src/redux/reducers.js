import { combineReducers } from 'redux';

import filterReducer from './filter/reducer';
import propertiesReducer from './properties/reducer';
import userReducer from './user/reducer';

const reducers = combineReducers({
    filter: filterReducer,
    properties: propertiesReducer,
    user: userReducer

});

export default reducers;
