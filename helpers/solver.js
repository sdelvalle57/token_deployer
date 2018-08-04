import numeral from 'numeral';

function formatNumber(value) {
    return numeral(value).format('0,0');
}

function isAddressValid(address) {
  var addressRE = /^0x[a-fA-F0-9]{40}$/;
  return(address.match(addressRE));
}

export default {
  formatNumber, isAddressValid
}