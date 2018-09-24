var Migrations = artifacts.require("./Migrations.sol");
var ERC20FactoryDataHolder = artifacts.require("./ERC20FactoryDataHolder.sol");
var ERC20FactoryFundsHolder = artifacts.require("./ERC20FactoryFundsHolder.sol");


module.exports = function(deployer) {
  //deployer.deploy(Migrations);

  deployer.deploy(ERC20FactoryFundsHolder, "0x8198BC0eA73E0C0377E346e227Ba9854B088E5Eb", 0);
};
/* Deployed on main network 
   * ERC20Factory:{
   *  address: 0x8198bc0ea73e0c0377e346e227ba9854b088e5eb,
   *  block: 6170995,
   *  txHash: 0xd56c1e1527b4733d02a19573e47bc8b3336f46844bdf54d295b44eac0efda2ee
   * }          
   * 
   * ERC20FactoryDataHolder: {
   *  address: 0x242a537842aCB6AE47f0cbd53f1b3823C6D29582,
   *  block: 6178803,
   *  txHash: 0x90d625679908245a5dea62efc261f3a7bcd19aea3b77aaf46877205ab9cde1cb
   * }  
   * 
   * ERC20FactoryFundsHolder: {
   *  address: 0xa3e4021747a9846119f11c1f1da69293b50598be,
   *  block: 6178838,
   *  txHash: 0x4e12f5c242d1b8c92906284927545e5d7898daef6f488552c083cb827b895218
   * }
*/
