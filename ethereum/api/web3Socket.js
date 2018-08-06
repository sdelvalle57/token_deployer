import Web3 from 'web3';
import truffle from '../truffle';


export default function web3Socket(network) {
  network = parseInt(network);
  let web3;
  const env = process.env.ENV || process.env.NODE_ENV || 'development';

  /*if(env == 'development') {
    web3 = new Web3("ws://localhost:"+truffle.networks.development.port);
  } else*/ {
    switch (network) {
      case 1:
        web3 =  new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/_ws'));
        break;
      default:
        web3 =  new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/_ws'));
        break;
      }
  }
  return web3;
}

