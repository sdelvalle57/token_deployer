import {ERC20_DEPLOYED_TOKENS_ERROR, ERC20_DEPLOYED} from '../actions/types';

const initialState = {
    erc20: {
        summaries: [],
        error: false,
        message: ''
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        
            //this error is reached when there is an error
            //tryin to read to the factory
        case ERC20_DEPLOYED_TOKENS_ERROR:
            return {
                ...state,
                erc20: {
                    error: true,
                    message: action.error,
                    summaries: []
                }
            }

        case ERC20_DEPLOYED:
            return {
                ...state,
                erc20: {
                    error: false,
                    message: '',
                    summaries: action.summaries
                }
            }
        
        
        default: return state;
    }
} 

