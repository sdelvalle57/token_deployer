var DetailedERC20 = artifacts.require("./DetailedERC20.sol");

module.exports = async (deployer) => {
  await deployer.deploy(DetailedERC20);  
};
