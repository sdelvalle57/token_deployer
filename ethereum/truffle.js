const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKey = "D26D6AFD5A2A4862CC8FB02523BDDE5CCF1427159519D9FC9187BE7D960BECCB".toLowerCase(); // private keys
const privKey2 = "".toLowerCase();

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
      ///from: "0x9426bAb45448D7830F4e690d34f553Bec97e94Cd"
    },

    rinkeby: {
      provider: () => {
        return new HDWalletProvider(privKey, "https://rinkeby.infura.io/v3/ccef7c32fcd94fb1a7683538e5d18aa2")
      },
      network_id: '4',
      gas: 4612388
    },

    live: {
      provider: () => {
        return new HDWalletProvider(privKey2, "https://mainnet.infura.io/v3/ccef7c32fcd94fb1a7683538e5d18aa2")
      },
      network_id: '1',
      gas: 4712388,
      gasPrice: 3000000000
    }
  }
};