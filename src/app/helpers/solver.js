import numeral from 'numeral';
import Web3 from 'web3';

export function formatNumber(value) {
  return numeral(value).format('0,0');
}

export function isAddressValid(address) {
  var addressRE = /^0x[a-fA-F0-9]{40}$/;
  return(address.match(addressRE));
}

export function convertToEther(value) {
  const web3 = new Web3();
  return web3.utils.fromWei(value, 'ether');
}

export function convertToWei(value) {
  const web3 = new Web3();
  return web3.utils.toWei(value);
}
