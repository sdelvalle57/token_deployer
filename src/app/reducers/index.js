import { combineReducers } from 'redux';

import ReducerNetwork from './reducer_network';

const rootReducer = combineReducers({
    network: ReducerNetwork
})

export default rootReducer;
