import {SEND_TX, TX_ERROR} from '../actions/types';

const initialState = {
    response: '',
    error: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SEND_TX:
            return {
                ...state,
                response: action.payload,
                error: false,
                caller: caller
            }
        case TX_ERROR:
            return {
                ...state,
                response: action.payload,
                error: true,
                caller: caller
            }   
        default: return state;
    }
}