const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKey = "D26D6AFD5A2A4862CC8FB02523BDDE5CCF1427159519D9FC9187BE7D960BECCB".toLowerCase(); // private keys

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*", // Match any network id
      ///from: "0x9426bAb45448D7830F4e690d34f553Bec97e94Cd"
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(privKey, "https://rinkeby.infura.io/qAudSy87uo2SByV57ETq")
      },
      network_id: '4',
      gas: 4612388,
    }
  }
};