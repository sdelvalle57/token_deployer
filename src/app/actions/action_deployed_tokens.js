import makeBlockie from 'ethereum-blockies-base64';

import {convertToEther, formatNumber} from '../helpers/solver';
import {ERC20_DEPLOYED_TOKENS_ERROR, ERC20_DEPLOYED} from './types';
import {callTx} from './tx_handler'; 
import {erc20Factory, basicERC20} from '../ethereum/api/erc20/loader';


export const getDeployedERC20 = () => async (dispatch, getState) => {
    const web3 = getState().network.web3;
    const networkId = getState().network.networkId;
    const contracts = getState().contracts;
    const factoryAddress = contracts.factoryAddress.erc20[networkId];
    const factory =  erc20Factory(factoryAddress, web3);
    const who = getState().network.accounts[0];
    const erc20Deployed = await callTx(factory.methods.getContracts(who));
    if(erc20Deployed.error) {
        return dispatch({
            type: ERC20_DEPLOYED_TOKENS_ERROR,
            error: erc20Deployed.message
        })
    }
    if(erc20Deployed.message.length == 0) {
        return dispatch({
            type: ERC20_DEPLOYED_TOKENS_ERROR,
            error: 'You have not deployed any token to the network'
        })
    }
    if(erc20Deployed.message.length != getState().deployedTokens.erc20.summaries.length){
        const summaries = [];           
        for(let j = 0; j < erc20Deployed.message.length; j++) {
            const address = erc20Deployed.message[j];
            const token = basicERC20(address, web3);
            const name = await callTx(token.methods.name());
            const symbol = await callTx(token.methods.symbol());
            const totalSupply = await callTx(token.methods.totalSupply());
            if(!totalSupply.error)
                totalSupply.message = formatNumber(convertToEther(totalSupply.message));
            const blockie = makeBlockie(address);
            summaries[j] = {address, name, symbol, totalSupply, blockie};
        }
        return dispatch({
            type: ERC20_DEPLOYED,
            summaries: summaries
        })
    }
}

export const getSummaries = () => async (dispatch, getState) => {
    const web3 = getState().network.web3;
    const networkId = getState().network.networkId;
}