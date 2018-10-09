import {ERC20_SUMMARY, ERC20_SUMMARY_ERROR, 
    ERC20_SUMMARY_LOADING} from './types';
import {callTx} from './tx_handler'; 
import {basicERC20} from '../ethereum/api/erc20/loader';


export const erc20Summary = () => async (dispatch, getState) => {
    dispatch({
        type: ERC20_SUMMARY_LOADING
    })
    let summary = {};
    const erc20Address = getState().contracts.erc20Address;
    const web3 = getState().network.web3;
    const token =  basicERC20(erc20Address, web3);
    const name = await callTx(token.methods.name());
    
    if(name.error) {
        dispatch({
            type: ERC20_SUMMARY_ERROR,
            error: `Contract not found or ${name.message}`
        })
        return;
    }
    
    const symbol = await callTx(token.methods.symbol());
    const decimals = await callTx(token.methods.decimals());
    const totalSupply = await callTx(token.methods.totalSupply());
    const owner = await callTx(token.methods.owner());
    summary.name = name.message;
    summary.symbol = symbol.message;
    summary.decimals = decimals.message;
    summary.totalSupply = totalSupply.message;
    summary.owner = owner.message;
    dispatch({
        type: ERC20_SUMMARY,
        summary: summary
    })
}

export const setERC20SummaryError = (error) => dispatch => {
    dispatch({
        type: ERC20_SUMMARY_ERROR,
        error: error
    })
}



