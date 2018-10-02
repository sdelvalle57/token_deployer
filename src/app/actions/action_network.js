import {NETWORK_PROVIDER, NETWORK_ID, NETWORK_ACCOUNTS} from './types';
import Web3 from 'web3';

export const checkNetwork = () => dispatch => {
    //check for window.web3 then check if there is a change from the lastNetwork
    if (typeof window == 'undefined' || typeof window.web3 == 'undefined') {
        dispatch({
            type: NETWORK_PROVIDER,
            payload: "Use a provider to send the Transaction"
        });
        return;
    } 
    
    //then we fetch the network, checking for the network id and 
    //finally checking the user accounts from the provider
    if (typeof window.web3 != 'undefined') {
        const web3 = new Web3(window.web3.currentProvider);
        window.web3.version.getNetwork(async (err, netId) => {
            if(!err) {
                if(netId != "1" && netId != "4") {
                    dispatch({
                        type: NETWORK_ID,
                        payload: "Please select the Main or Rinkeby network",
                        netId: netId,
                        web3: web3
                    });
                    return;
                }

                const accounts = await web3.eth.getAccounts();  
                if(!accounts[0]) {
                    dispatch({
                        type: NETWORK_ACCOUNTS,
                        accounts: [],
                        notLogged: true,
                        payload: "Please login to the network",
                        netId: netId,
                        web3: web3
                    });
                    return;
                }
                
                dispatch({
                    type: NETWORK_ACCOUNTS,
                    accounts: accounts,
                    notLogged: false,
                    payload: "",
                    netId: netId,
                    web3: web3
                });
            }
        });
    }
}