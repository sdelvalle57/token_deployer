import web3 from '../ethereum/api/web3';
import web3Socket from '../ethereum/api/web3Socket';
import tokenAt from '../ethereum/api/token';


/* reading functions */
async function getSummary(tokenAddress, network) {
  let summary = {};
  try {
    const token = tokenAt(tokenAddress, web3Socket(network));
    summary['name'] = await token.methods.name().call();
    summary['symbol'] = await token.methods.symbol().call();
    summary['decimals'] = await token.methods.decimals().call();
    summary['totalSupply'] = await token.methods.totalSupply().call();
    summary['owner'] = await token.methods.owner().call();
  } catch(e) {
    
  }
  
  return summary;
}

/* Methods for BasicToken */
async function totalSupply(tokenAddress) {
  const token = tokenAt(tokenAddress, web3Socket(network));
  const totalSupply  = await token.methods.totalSupply().call();
  return totalSupply;
}

async function balanceOf(tokenAddress, who, network) {
  const token = tokenAt(tokenAddress, web3Socket(network));
  const balance  = await token.methods.balanceOf(who).call();
  return balance;
}

async function transfer(tokenAddress, to, value) {
  value = convertToWei(value);
  const token = tokenAt(tokenAddress, web3);
  const method = token.methods.transfer(to, value);
  const response = await sendTx(method);
  return response;
}

/*Methods for StandardToken */
async function allowance(tokenAddress, owner, spender, network) {
  const token = tokenAt(tokenAddress, web3Socket(network));
  const allowance  = await token.methods.allowance(owner, spender).call();
  return allowance;
}

async function approve(tokenAddress, spender, value) {
  value = convertToWei(value);
  const token = tokenAt(tokenAddress, web3);
  const method = token.methods.approve(spender, value);
  const response = await sendTx(method);
  return response;
}

async function increaseApproval(tokenAddress, spender, addedValue) {
  addedValue = convertToWei(addedValue);
  const token = tokenAt(tokenAddress, web3);
  const method = token.methods.increaseApproval(spender, addedValue);
  const response = await sendTx(method);
  return response;
}

async function decreaseApproval(tokenAddress, spender, subtractedValue) {
  subtractedValue = convertToWei(subtractedValue);
  const token = tokenAt(tokenAddress, web3);
  const method = token.methods.decreaseApproval(spender, subtractedValue);
  const response = await sendTx(method);
  return response;
}

async function transferFrom(tokenAddress, from, to, value) {
  value = convertToWei(value);
  const token = tokenAt(tokenAddress, web3);
  const method = token.methods.transferFrom(from, to, value);
  const response = await sendTx(method);
  return response;
}

async function sendTx(method) {
  let response = {
    error: true,
    message: ""
  };
  try {
    const accounts = await getAccounts();
    const tx = await method.send({
        from: accounts[0]
    });
    response.error = false;
    response.message = tx.transactionHash;
  } catch (err) {
    response.message = err.message.split("\n")[0];
  }
  return response;
}


async function getAccounts() {
  const accounts = await web3.eth.getAccounts();
  return accounts;
}

function convertToEther(value) {
  return web3.utils.fromWei(value, 'ether');
}

function convertToWei(value) {
  return web3.utils.toWei(value);
}




export default {
  totalSupply, balanceOf, transfer, getSummary, convertToEther, 
  getAccounts, allowance, approve, increaseApproval, decreaseApproval,
  sendTx, transferFrom
}

 