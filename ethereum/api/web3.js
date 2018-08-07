import Web3 from 'web3';
import truffle from '../truffle';

let web3;

const env = process.env.ENV || process.env.NODE_ENV || 'development';
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else if(env == 'development') {
    web3 = new Web3("http://localhost:"+truffle.networks.development.port);
} 
export default web3;