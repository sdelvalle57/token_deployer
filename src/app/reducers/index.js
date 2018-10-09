import { combineReducers } from 'redux';

import ReducerNetwork from './reducer_network';
import ReducerContracts from './reducer_contracts';
import ReducerTransaction from './reducer_transaction';
import ReducerERC20 from './reducer_erc20';
import ReducerDeployedTokens from './reducer_deployed_tokens';

const rootReducer = combineReducers({
    network: ReducerNetwork,
    contracts: ReducerContracts,
    transaction: ReducerTransaction,
    erc20: ReducerERC20,
    deployedTokens: ReducerDeployedTokens
})

export default rootReducer;
