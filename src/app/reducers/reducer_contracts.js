
import {TOKEN_ADDRESS, TOKEN_ERROR_MESSAGE, TOKEN_LOADING} from '../actions/types';

const initialState = {
    factoryAddress: {
        erc20: {
            "1": "0x8198bc0ea73e0c0377e346e227ba9854b088e5eb",
            "4": "0x282388eeeaceacdad61d58743c28aea8ed7f4c59"
        }
    },
    tryAddress: {
        erc20: {
            "1": "0xFD2785a0b571bDE760015798157BA6065157E8f2",
            "4": "0x7bbd2895bf740e7771785854ee74ed401e803555"
        }
    },
    tokenAddress: '',
    summary: {},
    errorMessage: '',
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case TOKEN_ADDRESS:
            return {
                ...state,
                tokenAddress: action.tokenAddress
            }
        case TOKEN_ERROR_MESSAGE: 
            return {
                ...state,
                errorMessage: action.message
            }
        case TOKEN_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default: return state;
    }
}