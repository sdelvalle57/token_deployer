
export default async function callTx(method) {
    let response = {
      error: true,
      message: ""
    };
    try {
      const call = await method.call();
      response.error = false;
      response.message = call;
    } catch (err) {
      response.message = err.message.split("\n")[0];
    }
    return response;
  }