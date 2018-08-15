var ERC20FactoryDataHolder = artifacts.require("./ERC20FactoryDataHolder.sol");
var ERC20Factory = artifacts.require("./ERC20Factory.sol");

module.exports = (deployer) => {
  deployer.deploy(ERC20Factory).then(() => {
    return deployer.deploy(ERC20FactoryDataHolder, ERC20Factory.address);
  }).then(async () => {
      const erc20Factory = await ERC20Factory.deployed();
      await erc20Factory.setDataHolder(ERC20FactoryDataHolder.address);
  });
};
