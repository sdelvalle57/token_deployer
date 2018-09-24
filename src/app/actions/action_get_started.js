import {GET_STARTED_INITIAL, GET_STARTED_CLICKED} from './types';

export const getStartedInitial = () => dispatch => {
    return dispatch({type: GET_STARTED_INITIAL});
}

export const getStarterClicked = () => dispatch => {
    return dispatch({type: GET_STARTED_CLICKED});
}

