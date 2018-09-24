import {ADD_PACKS, REMOVE_PACKS} from '../actions/types';

const initalState = {
    blockchainStarterPack: false,
    ethLoan: false,
}

export default function(state = initalState, action) {
    switch(action.type) {
        case ADD_PACKS:
            return {
                ...state,
                blockchainStarterPack: !!action.payload.starterPack,
                ethLoan: !!action.payload.ethLoan
            }
        case REMOVE_PACKS:
            return initalState;
        
        default: return state;
    }
}