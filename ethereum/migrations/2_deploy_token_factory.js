var TokenFactoryDataHolder = artifacts.require("./TokenFactoryDataHolder.sol");
var TokenFactory = artifacts.require("./TokenFactory.sol");

module.exports = (deployer) => {
  deployer.deploy(TokenFactory).then(() => {
    return deployer.deploy(TokenFactoryDataHolder, TokenFactory.address);
  }).then(async () => {
      const tokenFactory = await TokenFactory.deployed();
      await tokenFactory.setDataHolder(TokenFactoryDataHolder.address);
  });
};
