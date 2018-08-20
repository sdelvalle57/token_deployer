import web3 from '../../ethereum/api/web3';
import sendTx from '../web3TxHandler';
import ownership from '../../ethereum/api/erc20/ownership';


async function transferOwnership(address, newOwner) {
  const contract = ownership(address, web3);
  const owner = await contract.methods.owner().call();
  const method = contract.methods.transferOwnership(newOwner);
  const response = await sendTx(method);
  return response;
}

export default {
    transferOwnership
}

 