import {SHOW_FIXED_MENU, HIDE_FIXED_MENU} from '../actions/types';

const initialState = {
    fixed: false
}

export default function(state = initialState, action ) {
    switch (action.type) {
        case SHOW_FIXED_MENU:
            return {
                ...state,
                fixed: true
            }
        case HIDE_FIXED_MENU:
            return {
                ...state,
                fixed: false
            }
        default: return state;
    }
} 