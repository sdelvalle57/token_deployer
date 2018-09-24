import {ADD_PACKS} from './types';
import {database} from '../lib/firebase_config';

export const readUserPack = (uid) => dispatch => {    
    return database.on('value', snapshot => {
        console.log("read_user", snapshot.val())
        if(typeof snapshot.val()[uid] != 'undefined'){
            dispatch({
                type: ADD_PACKS,
                payload: snapshot.val()[uid]
            })
        }
    })
}

export const addStarterPack = (uid) => dispatch => {
    database.child(uid).update({
        starterPack: true
    })
}

export const addEthLoanPack = (uid) => dispatch => {
    database.child(uid).update({
        ethLoan: true
    })
}