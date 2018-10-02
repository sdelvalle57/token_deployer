import {SEND_TX, TX_ERROR} from './types';

export const callTx1 = (method, caller) => async (dispatch) => {
    try {
        const call = await method.call();
        dispatch({
            type: SEND_TX,
            payload: call,
            caller: caller
        })
    } catch (err) {
        dispatch({
            type: TX_ERROR,
            payload: err.message.split("\n")[0],
            caller: caller
        })
    }
}

export const sendTx1 = (method, caller) => async (dispatch, getState) => {
    try {
        const accounts = getState().network.accounts;
        const tx = await method.send({
            from: accounts[0]
        })
        dispatch({
            type: SEND_TX,
            payload: tx.transactionHash,
            caller: caller
        })
    } catch (err) {
        dispatch({
            type: TX_ERROR,
            payload: err.message.split("\n")[0],
            caller: caller
        })
    }
}

export const sendTxWithValue1 = (method, value, caller) => 
    async (dispatch, getState) => {
    try {
        const accounts = getState().network.accounts;
        const tx = await method.send({
            from: accounts[0],
            value: value
        })
        dispatch({
            type: SEND_TX,
            payload: tx.transactionHash,
            caller: caller
        })
    } catch (err) {
        dispatch({
            type: TX_ERROR,
            payload: err.message.split("\n")[0],
            caller: caller
        })
    }
}