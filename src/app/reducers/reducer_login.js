import {OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, GET_USER_LOGIN, USER_NOT_LOGGED} from '../actions/types';

const initialState = {
    showModal: false,
    user: {
        uid: ''
    },
    loading: true,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case OPEN_LOGIN_MODAL:
            return {
                ...state,
                showModal: true
            }
        case CLOSE_LOGIN_MODAL:
            return {
                ...state,
                showModal: false
            }
        case GET_USER_LOGIN:
            return{
                ...state,
                user: action.payload,
                loading: false
            }
        case USER_NOT_LOGGED:
            return {
                ...state,
                user: {
                    uid:''
                },
                loading: false
            };

        default: return state;
    }
}