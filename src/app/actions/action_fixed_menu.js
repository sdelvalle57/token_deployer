import {SHOW_FIXED_MENU, HIDE_FIXED_MENU} from './types';

export const showFixedMenu = show => dispatch => {
    if(show) {
        return dispatch({type: SHOW_FIXED_MENU});
    } else {
        return dispatch({type: HIDE_FIXED_MENU})
    }
}