import {auth} from '../lib/firebase_config';
import {OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, GET_USER_LOGIN, 
    USER_NOT_LOGGED, SIGN_IN, SIGN_OUT, REMOVE_PACKS} from './types';
import {readUserPack} from './action_add_user_pack';

export const openLoginModal = () => dispatch => {
    return dispatch({type: OPEN_LOGIN_MODAL});
}

export const closeLoginModal = () => dispatch => {
    return dispatch({type: CLOSE_LOGIN_MODAL});
}

export const socialSignin = (provider) => dispatch => {
    auth.signInWithPopup(provider).then(() => {
        dispatch({
            type: SIGN_IN,
            error: null
        })
    }, (error) => {
        dispatch({
            type: SIGN_IN,
            error: error
        })
    })
}

export const performLogout = () => dispatch => {
    return auth.signOut().then(() => {
        dispatch({type: SIGN_OUT, error: null})
        dispatch({type: REMOVE_PACKS})
    }, (error) => {
        dispatch({type: SIGN_OUT, error: error})
        dispatch({type: REMOVE_PACKS})
    })
}

export const getUser = () => dispatch => {
    return auth.onAuthStateChanged(user => {
        if(user == null) {
            dispatch({
                type: USER_NOT_LOGGED
            })
        } else {
            dispatch({
                type: GET_USER_LOGIN,
                payload: user
            });
            dispatch(readUserPack(user.uid));
        }
    })
}