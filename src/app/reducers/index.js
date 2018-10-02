import { combineReducers } from 'redux';

import ReducerNetwork from './reducer_network';
import ReducerContracts from './reducer_contracts';
import ReducerTransaction from './reducer_transaction';

const rootReducer = combineReducers({
    network: ReducerNetwork,
    contracts: ReducerContracts,
    transaction: ReducerTransaction
})

export default rootReducer;
