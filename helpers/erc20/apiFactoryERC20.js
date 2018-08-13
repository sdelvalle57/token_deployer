import web3 from '../../ethereum/api/web3';
import dataHolderAt from '../../ethereum/api/erc20/dataHolderERC20';




async function getStandarERC20Price(address) {
  const dataHolder = dataHolderAt(address, web3);
  const price  = await dataHolder.methods.getStandarERC20Price().call();
  return price;
}
/*

async function transfer(tokenAddress, to, value) {
  value = convertToWei(value);
  const token = basicTokenAt(tokenAddress, web3);
  const method = token.methods.transfer(to, value);
  const response = await sendTx(method);
  return response;
}
*/





export default {
  getStandarERC20Price
}

 