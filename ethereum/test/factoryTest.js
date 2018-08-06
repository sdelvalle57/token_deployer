const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
const TokenFactory = artifacts.require('TokenFactory.sol')
const TokenFactoryDataHolder = artifacts.require('TokenFactoryDataHolder.sol')
const BasicERC20 = artifacts.require('BasicERC20.sol');
const StandardERC20 = artifacts.require('StandardERC20.sol');

let accounts;
let tokenFactory;
let tokenFactoryDataHolder;

beforeEach(async () =>{
  accounts = await web3.eth.getAccounts();
  /*
  tokenFactory = await TokenFactory.deployed();
  tokenFactoryDataHolder = await TokenFactoryDataHolder.deployed();
  tokenFactory = new web3.eth.Contract(JSON.parse(JSON.stringify(TokenFactory.abi)), tokenFactory.address); //load it the web3 way
  tokenFactoryDataHolder = new web3.eth.Contract(JSON.parse(JSON.stringify(TokenFactoryDataHolder.abi)), tokenFactoryDataHolder.address); //load it the web3 way
 */

  accounts = await web3.eth.getAccounts();
  tokenFactory = await new web3.eth.Contract(JSON.parse(
    JSON.stringify(TokenFactory.abi)))
  .deploy({data: TokenFactory.bytecode})
  .send({from: accounts[0], gas: '6000000'});    

  tokenFactoryDataHolder = await new web3.eth.Contract(
    JSON.parse(JSON.stringify(TokenFactoryDataHolder.abi)))
  .deploy({
    data: TokenFactoryDataHolder.bytecode,
    arguments: [tokenFactory.options.address]
  })
  .send({from: accounts[0], gas: '6000000'}); 

  await tokenFactory.methods.setDataHolder(tokenFactoryDataHolder.options.address)
  .send({from: accounts[0], gas:'1000000'})
});

contract('ERC20 Token Factory', () =>{
  describe("Checks deployments", () => {
    it('deploys TokenFactory contract', async ()=>{
      assert.ok(tokenFactory.options.address);
    });

    it('deploys TokenFactoryDataHolder contract', async ()=>{
      assert.ok(tokenFactoryDataHolder.options.address);
    });

    it('checks dataholder set into the tokenFactory contract', async ()=>{
      const dataHolder = await tokenFactory.methods.getDataHolder().call();
      assert.equal(dataHolder, tokenFactoryDataHolder.options.address);
    });

    it('checks factory address set into the dataholder as implementation', async ()=>{
      const implementation = await tokenFactoryDataHolder.methods.tokenFactoryImpl().call();
      assert.equal(implementation, tokenFactory.options.address);
    });

    it('sets tokens prices', async ()=>{
      try {
        await tokenFactory.methods.setStandardERC20Price("2000").send({
          from: accounts[0],
          gas: '600000'
        });
        assert.ok(true);
      } catch (e) {
        assert.ok(false, e);
      }
      const price = await tokenFactoryDataHolder.methods.getStandarERC20Price().call();
      assert.equal(price, "2000");
    });

    it('tries to set tokens prices by another account', async ()=>{
      try {
        await tokenFactory.methods.setStandardERC20Price("3000").send({
          from: accounts[1],
          gas: '500000'
        });
        assert.ok(false, "transaction was mined");
      } catch (e) {
        assert.ok(true, e);
      }
      const price = await tokenFactoryDataHolder.methods.getStandarERC20Price().call();
      assert.notEqual(price, "3000");
    });

    it('sets another address implementation', async ()=>{
      const newTokenFactory = await new web3.eth.Contract(
        JSON.parse(JSON.stringify(TokenFactory.abi)))
      .deploy({data: TokenFactory.bytecode})
      .send({from: accounts[0], gas: '5000000'});  
      const address = newTokenFactory.options.address;

      //set the new implenetation
      try {
        await tokenFactory.methods.setTokenFactoryImpl(address).send({
          from: accounts[0],
          gas: '500000'
        });
        assert.ok(true, "transaction was mined");
      } catch (e) {
        assert.ok(false, e);
      }
      const implementation = await tokenFactoryDataHolder.methods.tokenFactoryImpl().call();
      assert.equal(address, implementation);

      //set dataholder to newTokenFactory
      try {
        await newTokenFactory.methods.setDataHolder(tokenFactoryDataHolder.options.address).send({
          from: accounts[0],
          gas: '500000'
        });
        assert.ok(true, "transaction was mined");
      } catch (e) {
        assert.ok(false, e);
      }
      const dataHolder = await newTokenFactory.methods.getDataHolder().call();
      assert.equal(dataHolder, tokenFactoryDataHolder.options.address);

      //try to set new values with old impl
      try {
        await tokenFactory.methods.setStandardERC20Price("5000").send({
          from: accounts[0],
          gas: '500000'
        });
        assert.ok(false, "tx mined");
      } catch (e) {
        assert.ok(true, e);
      }
      let price = await tokenFactoryDataHolder.methods.getStandarERC20Price().call();
      assert.notEqual(price, "5000");

      //set new values with new impl
      try {
        await newTokenFactory.methods.setStandardERC20Price("4000").send({
          from: accounts[0],
          gas: '500000'
        });
        assert.ok(true, "tx mined");
      } catch (e) {
        assert.ok(false, e);
      }
      price = await tokenFactoryDataHolder.methods.getStandarERC20Price().call();
      assert.equal(price, "4000");
    });

    it('launches basicERC20 with no value', async () => {
      try {
        await tokenFactory.methods.createBasicToken("DelvaB", "STDB", "10000000")
        .send({
          from: accounts[1],
          gas: '5000000'
        })
        assert.ok(true, "tx mined");

        const user = await tokenFactoryDataHolder.methods.users(0).call();
        assert.equal(user, accounts[1]);

        const tokenDeployed = await tokenFactoryDataHolder.methods.basicTokensDeployed(0).call();
        assert.notEqual('0', tokenDeployed);

        const contracts = await tokenFactoryDataHolder.methods.getContracts(accounts[1]).call();
        assert.equal(tokenDeployed, contracts[0]);

        const tokenType = await tokenFactoryDataHolder.methods.token(tokenDeployed).call();
        assert.equal(0, tokenType);

        const basicERC20 = new web3.eth.Contract(
          JSON.parse(JSON.stringify(BasicERC20.abi)), tokenDeployed); //load it the web3 way

        const owner = await basicERC20.methods.owner().call();
        assert.equal(owner, accounts[1]);

        const name = await basicERC20.methods.name().call();
        assert.equal(name, "DelvaB");

        const symbol = await basicERC20.methods.symbol().call();
        assert.equal(symbol, "STDB");

        const supply = await basicERC20.methods.totalSupply().call();
        assert.equal(supply, "10000000000000000000000000");

      } catch(e) {
        assert.ok(false, e);
      }
    });

    it('launches basicERC20 with some value and withdraw', async () => {
      try {
        await tokenFactory.methods.createBasicToken("DelvaB", "STDB", "10000000")
        .send({
          from: accounts[1],
          gas: '5000000',
          value: '100'
        })
        assert.ok(true, "tx mined");

        const user = await tokenFactoryDataHolder.methods.users(0).call();
        assert.equal(user, accounts[1]);

        const tokenDeployed = await tokenFactoryDataHolder.methods.basicTokensDeployed(0).call();
        assert.notEqual('0', tokenDeployed);

        const contracts = await tokenFactoryDataHolder.methods.getContracts(accounts[1]).call();
        assert.equal(tokenDeployed, contracts[0]);

        const tokenType = await tokenFactoryDataHolder.methods.token(tokenDeployed).call();
        assert.equal(0, tokenType);

        const basicERC20 = new web3.eth.Contract(
          JSON.parse(JSON.stringify(BasicERC20.abi)), tokenDeployed); //load it the web3 way

        const owner = await basicERC20.methods.owner().call();
        assert.equal(owner, accounts[1]);

        const name = await basicERC20.methods.name().call();
        assert.equal(name, "DelvaB");

        const symbol = await basicERC20.methods.symbol().call();
        assert.equal(symbol, "STDB");

        const supply = await basicERC20.methods.totalSupply().call();
        assert.equal(supply, "10000000000000000000000000");

        const fundsRaised = await tokenFactoryDataHolder.methods.fundsRaised().call();
        assert.equal("100", fundsRaised);

        let acc1Balance = await web3.eth.getBalance(accounts[1]);
        await tokenFactory.methods.withdrawFunds(accounts[1]).send({
          from: accounts[0],
          gas: '500000'
        })
        acc1BalanceNew = await web3.eth.getBalance(accounts[1]);
        acc1Balance = parseInt(acc1Balance)+100;
        assert.equal(acc1Balance, acc1BalanceNew)

        const fundsWithdrawn = await tokenFactoryDataHolder.methods.fundsWithdrawn().call();
        assert.equal(fundsWithdrawn, "100");

      } catch(e) {
        assert.ok(false, e);
      }
    });

    it('launches standardERC20 and withdraw', async () => {
      try {
        await tokenFactory.methods.setStandardERC20Price("1000").send({
          from: accounts[0],
          gas: '500000'
        })
        const standardERC20Price = await tokenFactoryDataHolder.methods.getStandarERC20Price().call();
        assert.equal("1000", standardERC20Price);
      } catch(e) {
        assert.ok(false, e);
      }

      try {
        await tokenFactory.methods.createStandardToken("DelvaS", "STDS", "20000000")
        .send({
          from: accounts[1],
          gas: '5000000',
          value: '100'
        })
        assert.ok(false, "tx mined");
      } catch (e) {
        assert.ok(true, e);
      }

      try {
        await tokenFactory.methods.createStandardToken("DelvaS", "STDS", "20000000")
        .send({
          from: accounts[1],
          gas: '5000000',
          value: '1000'
        })
        assert.ok(true, "tx mined");

        const user = await tokenFactoryDataHolder.methods.users(0).call();
        assert.equal(user, accounts[1]);

        const tokenDeployed = await tokenFactoryDataHolder.methods.standardTokensDeployed(0).call();
        assert.notEqual('0', tokenDeployed);

        const contracts = await tokenFactoryDataHolder.methods.getContracts(accounts[1]).call();
        assert.equal(tokenDeployed, contracts[0]);

        const tokenType = await tokenFactoryDataHolder.methods.token(tokenDeployed).call();
        assert.equal(1, tokenType);

        const standardERC20 = new web3.eth.Contract(
          JSON.parse(JSON.stringify(StandardERC20.abi)), tokenDeployed); //load it the web3 way

        const owner = await standardERC20.methods.owner().call();
        assert.equal(owner, accounts[1]);

        const name = await standardERC20.methods.name().call();
        assert.equal(name, "DelvaS");

        const symbol = await standardERC20.methods.symbol().call();
        assert.equal(symbol, "STDS");

        const supply = await standardERC20.methods.totalSupply().call();
        assert.equal(supply, "20000000000000000000000000");

        const fundsRaised = await tokenFactoryDataHolder.methods.fundsRaised().call();
        assert.equal("1000", fundsRaised);

        let acc1Balance = await web3.eth.getBalance(accounts[1]);
        await tokenFactory.methods.withdrawFunds(accounts[1]).send({
          from: accounts[0],
          gas: '500000'
        })
        acc1BalanceNew = await web3.eth.getBalance(accounts[1]);
        acc1Balance = parseInt(acc1Balance)+1000;
        assert.equal(acc1Balance, acc1BalanceNew)

        const fundsWithdrawn = await tokenFactoryDataHolder.methods.fundsWithdrawn().call();
        assert.equal(fundsWithdrawn, "1000");

      } catch(e) {
        assert.ok(false, e);
      }
    });
  });
});


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
