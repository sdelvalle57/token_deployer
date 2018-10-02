//import web3 from '../../ethereum/api/web3';
import sendTx from '../web3TxHandler';
import solver from '../solver';
import basicERC20 from '../../ethereum/api/erc20/basicERC20';


/* reading functions */
export async function getSummary(tokenAddress) {
  let summary = {};
  try {
    const token = basicERC20(tokenAddress, web3);
    summary['name'] = await token.methods.name().call();
    summary['symbol'] = await token.methods.symbol().call();
    summary['decimals'] = await token.methods.decimals().call();
    summary['totalSupply'] = await token.methods.totalSupply().call();
    summary['owner'] = await token.methods.owner().call();
    
  } catch(e) {
  }
  
  return summary;
}

export async function totalSupply(tokenAddress) {
  const token = basicERC20(tokenAddress, web3);
  const totalSupply  = await token.methods.totalSupply().call();
  return totalSupply;
}

export async function balanceOf(tokenAddress, who) {
  const token = basicERC20(tokenAddress, web3);
  const balance  = await token.methods.balanceOf(who).call();
  return balance;
}

export async function transfer(tokenAddress, to, value) {
  value = solver.convertToWei(value);
  const token = basicERC20(tokenAddress, web3);
  const method = token.methods.transfer(to, value);
  const response = await sendTx(method);
  return response;
}