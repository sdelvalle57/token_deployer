var ERC20FactoryDataHolder = artifacts.require("./ERC20FactoryDataHolder.sol");
var ERC20FactoryFundsHolder = artifacts.require("./ERC20FactoryFundsHolder.sol");
var ERC20Factory = artifacts.require("./ERC20Factory.sol");

module.exports = (deployer) => {
  deployer.deploy(ERC20Factory).then(() => {
    return deployer.deploy(ERC20FactoryDataHolder, ERC20Factory.address, 0);
  }).then(() => {
    return deployer.deploy(ERC20FactoryFundsHolder, ERC20Factory.address, 0);
  }).then(async () => {
    const erc20Factory = await ERC20Factory.deployed();
    await erc20Factory.setHolders(ERC20FactoryDataHolder.address, ERC20FactoryFundsHolder.address);
  });
};
