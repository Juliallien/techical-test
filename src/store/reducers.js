import {combineReducers} from 'redux';

import usersReducer, {NAME as usersName} from '../features/users';

// eslint-disable-next-line
export default () => 
    combineReducers({
    [usersName]: usersReducer,
});