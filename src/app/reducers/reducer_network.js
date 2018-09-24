import {NETWORK_PROVIDER, NETWORK_ID, NETWORK_ACCOUNTS} from '../actions/types';

const initialState = {
    providerNotSet: true,
    networkNotSet: true,
    networkId: 0,
    notLogged: true,
    accounts: [],
    message: '',
    contractError : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NETWORK_PROVIDER:
            return {
                ...state,
                providerNotSet: true,
                message: action.payload
            }
        case NETWORK_ID:
            return {
                ...state,
                providerNotSet: false,
                networkNotSet: true,
                networkId: action.netId,
                message: action.payload
            }
        case NETWORK_ACCOUNTS:
            return {
                ...state,
                providerNotSet: false,
                networkNotSet: false,
                networkId: action.netId,
                notLogged: action.notLogged,
                accounts: action.accounts,
                message: action.payload
            }
        default: return state;
    }
}