import {GET_STARTED_INITIAL, GET_STARTED_CLICKED} from '../actions/types';

const initialState = {
    clicked: false
}

export default function(state = initialState, action ) {
    switch (action.type) {
        case GET_STARTED_INITIAL:
            return initialState;
        case GET_STARTED_CLICKED:
            return {
                ...state,
                clicked: true
            }
        default: return state;
    }
} 