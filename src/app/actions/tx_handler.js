export async function callTx(method) {
    let response = {
        error: true,
        message: ""
    };
    try {
        const call = await method.call();
        response.error = false;
        response.message = call;
    } catch (err) {
        response.error = true;
        response.message = err.message.split("\n")[0];
    }
    return response;
}

export async function sendTx(method, accounts) {
    let response = {
        error: true,
        message: ""
    };
    try {
        const tx = await method.send({
            from: accounts[0]
        });
        response.error = false;
        response.message = tx.transactionHash;
    } catch (err) {
        response.error = true;
        response.message = err.message.split("\n")[0];
    }
    return response;
  }

  export async function sendTxWithValue(method, accounts, value) {
    let response = {
        error: true,
        message: ""
    };
    try {
        const tx = await method.send({
            from: accounts[0],
            value: value
        });
        response.error = false;
        response.message = tx.transactionHash;
    } catch (err) {
        response.error = true;
        response.message = err.message.split("\n")[0];
    }
    return response;
  }