import {TOKEN_ADDRESS, TOKEN_ERROR_MESSAGE, TOKEN_LOADING} from './types';

export const setTokenAddress = (tokenAddress) => dispatch => {
    dispatch({
        type: TOKEN_ADDRESS,
        tokenAddress: tokenAddress
    })
}

export const setErrorMessage = (errorMessage) => dispatch => {
    dispatch({
        type: TOKEN_ERROR_MESSAGE,
        message: errorMessage
    })
}

export const setLoading = (loading) => dispatch => {
    dispatch({
        type: TOKEN_LOADING,
        loading: loading
    })
}
