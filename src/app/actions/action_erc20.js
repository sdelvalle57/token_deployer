import {callTx} from './tx_handler'; 
import {basicERC20} from '../ethereum/api/erc20/loader';

export const erc20Summary = () => async (dispatch, getState) => {
    let summary = {};
    const tokenAddress = getState().contracts.tokenAddress;
    const web3 = getState().network.web3;
    const token =  basicERC20(tokenAddress, web3);
    const name = await callTx(token.methods.name());
    const symbol = await callTx(token.methods.symbol());
    summary.name = name.message;
    summary.symbol = symbol.message;
    console.log('summary', summary);
}