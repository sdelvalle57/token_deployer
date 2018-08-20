import web3 from '../ethereum/api/web3';


export default async function sendTx(method) {
    let response = {
      error: true,
      message: ""
    };
    try {
      const accounts = await web3.eth.getAccounts();
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