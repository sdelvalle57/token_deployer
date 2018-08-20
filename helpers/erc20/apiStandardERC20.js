import web3 from '../../ethereum/api/web3';
import sendTx from '../web3TxHandler';
import caller from '../web3CallerHandler';
import solver from '../solver';
import standardERC20 from '../../ethereum/api/erc20/standardERC20';

/*Methods for StandardToken */
async function allowance(tokenAddress, owner, spender) {
    const token = standardERC20(tokenAddress, web3);
    const method  = token.methods.allowance(owner, spender);
    const allowance =  await caller(method);
    if(allowance.error && allowance.message=="Couldn't decode uint256 from ABI: 0x"){
      allowance.message = allowance.message + ". "+"Maybe this token is not this type."
    }
    return allowance;
  }
  
  async function approve(tokenAddress, spender, value) {
    value = solver.convertToWei(value);
    const token = standardERC20(tokenAddress, web3);
    const method = token.methods.approve(spender, value);
    const response = await sendTx(method);
    return response;
  }
  
  async function increaseApproval(tokenAddress, spender, addedValue) {
    addedValue = solver.convertToWei(addedValue);
    const token = standardERC20(tokenAddress, web3);
    const method = token.methods.increaseApproval(spender, addedValue);
    const response = await sendTx(method);
    return response;
  }
  
  async function decreaseApproval(tokenAddress, spender, subtractedValue) {
    subtractedValue = solver.convertToWei(subtractedValue);
    const token = standardERC20(tokenAddress, web3);
    const method = token.methods.decreaseApproval(spender, subtractedValue);
    const response = await sendTx(method);
    return response;
  }
  
  async function transferFrom(tokenAddress, from, to, value) {
    value = solver.convertToWei(value);
    const token = standardERC20(tokenAddress, web3);
    const method = token.methods.transferFrom(from, to, value);
    const response = await sendTx(method);
    return response;
  }
  

  
  

  export default {
    allowance, approve, increaseApproval, decreaseApproval, transferFrom
  }