import numeral from 'numeral';
import web3 from '../ethereum/api/web3';


function formatNumber(value) {
    return numeral(value).format('0,0');
}

function isAddressValid(address) {
  var addressRE = /^0x[a-fA-F0-9]{40}$/;
  return(address.match(addressRE));
}

function convertToEther(value) {
  return web3.utils.fromWei(value, 'ether');
}

function convertToWei(value) {
  return web3.utils.toWei(value);
}

export default {
  formatNumber, isAddressValid, convertToEther, convertToWei
}