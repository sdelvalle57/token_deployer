const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
const TokenFactory = artifacts.require('ERC20Factory.sol')
const TokenFactoryDataHolder = artifacts.require('ERC20FactoryDataHolder.sol')
const TokenFactoryFundsHolder = artifacts.require('ERC20FactoryFundsHolder.sol')
const BasicERC20 = artifacts.require('BasicERC20.sol');
const StandardERC20 = artifacts.require('StandardERC20.sol');

let accounts;
let tokenFactory;
let tokenFactoryDataHolder;
let tokenFactoryFundsHolder;

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
    arguments: [tokenFactory.options.address, 0]
  })
  .send({from: accounts[0], gas: '6000000'}); 

  tokenFactoryFundsHolder = await new web3.eth.Contract(
    JSON.parse(JSON.stringify(TokenFactoryFundsHolder.abi)))
  .deploy({
    data: TokenFactoryFundsHolder.bytecode,
    arguments: [tokenFactory.options.address, 0]
  })
  .send({from: accounts[0], gas: '6000000'});

  await tokenFactory.methods.setHolders(
    tokenFactoryDataHolder.options.address,
    tokenFactoryFundsHolder.options.address
  )
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

    it('deploys TokenFactoryFundsHolder contract', async ()=>{
      assert.ok(tokenFactoryFundsHolder.options.address);
    });

    it('checks dataHolder and fundsHolder set into the tokenFactory contract', async ()=>{
      const dataHolder = await tokenFactory.methods.getDataHolder().call();
      assert.equal(dataHolder, tokenFactoryDataHolder.options.address);
      const fundsHolder = await tokenFactory.methods.getFundsHolder().call();
      assert.equal(fundsHolder, tokenFactoryFundsHolder.options.address);
    });

    it('checks factory address set into the dataHolder and fundsHolder as implementation', async ()=>{
      let implementation = await tokenFactoryDataHolder.methods.tokenFactoryImpl().call();
      assert.equal(implementation, tokenFactory.options.address);
      implementation = await tokenFactoryFundsHolder.methods.tokenFactoryImpl().call();
      assert.equal(implementation, tokenFactory.options.address);
    });

    it('sets tokens prices', async ()=>{
      try {
        await tokenFactory.methods.setPrice(1, "2000").send({
          from: accounts[0],
          gas: '600000'
        });
        assert.ok(true);
      } catch (e) {
        assert.ok(false, e);
      }
      const price = await tokenFactoryDataHolder.methods.getPrice(1).call();
      assert.equal(price, "2000");
    });

    it('tries to set tokens prices by another account', async ()=>{
      try {
        await tokenFactory.methods.setPrice(0, "3000").send({
          from: accounts[1],
          gas: '500000'
        });
        assert.ok(false, "transaction was mined");
      } catch (e) {
        assert.ok(true, e);
      }
      const price = await tokenFactoryDataHolder.methods.getPrice(0).call();
      assert.notEqual(price, "3000");
    });

    it('sets another address implementation', async ()=>{
      const newTokenFactory = await new web3.eth.Contract(
        JSON.parse(JSON.stringify(TokenFactory.abi)))
      .deploy({data: TokenFactory.bytecode})
      .send({from: accounts[0], gas: '5000000'});  
      const address = newTokenFactory.options.address;

      //set the new implemetation
      try {
        await tokenFactory.methods.setTokenFactoryImpl(address).send({
          from: accounts[0],
          gas: '500000'
        });
        assert.ok(true, "transaction was mined");
      } catch (e) {
        assert.ok(false, e);
      }
      let implementation = await tokenFactoryDataHolder.methods.tokenFactoryImpl().call();
      assert.equal(address, implementation);
      implementation = await tokenFactoryFundsHolder.methods.tokenFactoryImpl().call();
      assert.equal(address, implementation);
      

      //set dataholder to newTokenFactory
      try {
        await newTokenFactory.methods.setHolders(
          tokenFactoryDataHolder.options.address,
          tokenFactoryFundsHolder.options.address
        ).send({
          from: accounts[0],
          gas: '500000'
        });
        assert.ok(true, "transaction was mined");
      } catch (e) {
        assert.ok(false, e);
      }
      const dataHolder = await newTokenFactory.methods.getDataHolder().call();
      assert.equal(dataHolder, tokenFactoryDataHolder.options.address);
      const fundsHolder = await newTokenFactory.methods.getFundsHolder().call();
      assert.equal(fundsHolder, tokenFactoryFundsHolder.options.address);

      //try to set new values with old impl
      try {
        await tokenFactory.methods.setPrice(1, "5000").send({
          from: accounts[0],
          gas: '500000'
        });
        assert.ok(false, "tx mined");
      } catch (e) {
        assert.ok(true, e);
      }
      let price = await tokenFactoryDataHolder.methods.getPrice(1).call();
      assert.notEqual(price, "5000");

      //set new values with new impl
      try {
        await newTokenFactory.methods.setPrice(0, "4000").send({
          from: accounts[0],
          gas: '500000'
        });
        assert.ok(true, "tx mined");
      } catch (e) {
        assert.ok(false, e);
      }
      price = await tokenFactoryDataHolder.methods.getPrice(0).call();
      assert.equal(price, "4000");
    });

    it('launches new holders and set new versions on factory', async () => {
      const tokenFactoryDataHolder2 = await new web3.eth.Contract(
        JSON.parse(JSON.stringify(TokenFactoryDataHolder.abi)))
      .deploy({
        data: TokenFactoryDataHolder.bytecode,
        arguments: [
          tokenFactory.options.address, 
          tokenFactoryDataHolder.options.address
        ]
      })
      .send({from: accounts[0], gas: '6000000'}); 
    
      const tokenFactoryFundsHolder2 = await new web3.eth.Contract(
        JSON.parse(JSON.stringify(TokenFactoryFundsHolder.abi)))
      .deploy({
        data: TokenFactoryFundsHolder.bytecode,
        arguments: [
          tokenFactory.options.address, 
          tokenFactoryFundsHolder.options.address
        ]
      })
      .send({from: accounts[0], gas: '6000000'});

      await tokenFactory.methods.setHolders(
        tokenFactoryDataHolder2.options.address,
        tokenFactoryFundsHolder2.options.address
      )
      .send({from: accounts[0], gas:'1000000'})

      const dataHolder = await tokenFactory.methods.getDataHolder().call();
      assert.equal(dataHolder, tokenFactoryDataHolder2.options.address);

      const fundsHolder = await tokenFactory.methods.getFundsHolder().call();
      assert.equal(fundsHolder, tokenFactoryFundsHolder2.options.address);

      const loadedDataHolder = new web3.eth.Contract(JSON.parse(
        JSON.stringify(TokenFactoryDataHolder.abi)), dataHolder
      ); 
      let impl = await loadedDataHolder.methods.tokenFactoryImpl().call();
      assert.equal(tokenFactory.options.address, impl);

      const prevVersionDataHolder = await loadedDataHolder.methods.prevVersion().call();
      assert.equal(prevVersionDataHolder, tokenFactoryDataHolder.options.address);

      const loadedFundsHolder = new web3.eth.Contract(JSON.parse(
        JSON.stringify(TokenFactoryFundsHolder.abi)), fundsHolder
      ); 
      impl = await loadedFundsHolder.methods.tokenFactoryImpl().call();
      assert.equal(tokenFactory.options.address, impl);

      const prevVersionFundsHolder = await loadedFundsHolder.methods.prevVersion().call();
      assert.equal(prevVersionFundsHolder, tokenFactoryFundsHolder.options.address);
      
    })

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

        const basicERC20 = new web3.eth.Contract(
          JSON.parse(JSON.stringify(BasicERC20.abi)), tokenDeployed); //load it the web3 way

        const owner = await basicERC20.methods.owner().call();
        assert.equal(owner, accounts[1]);

        const contractBalance = await basicERC20.methods.balanceOf(tokenFactory.options.address).call();
        assert.equal(0, contractBalance);

        const ownerBalance = await basicERC20.methods.balanceOf(accounts[1]).call();
        assert.equal(ownerBalance, web3.utils.toWei("10000000"));

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

        const basicERC20 = new web3.eth.Contract(
          JSON.parse(JSON.stringify(BasicERC20.abi)), tokenDeployed); //load it the web3 way

        const owner = await basicERC20.methods.owner().call();
        assert.equal(owner, accounts[1]);

        const contractBalance = await basicERC20.methods.balanceOf(tokenFactory.options.address).call();
        assert.equal(0, contractBalance);

        const ownerBalance = await basicERC20.methods.balanceOf(accounts[1]).call();
        assert.equal(ownerBalance, web3.utils.toWei("10000000"));

        const name = await basicERC20.methods.name().call();
        assert.equal(name, "DelvaB");

        const symbol = await basicERC20.methods.symbol().call();
        assert.equal(symbol, "STDB");

        const supply = await basicERC20.methods.totalSupply().call();
        assert.equal(supply, "10000000000000000000000000");

        const fundsRaised = await tokenFactoryFundsHolder.methods.fundsRaised().call();
        assert.equal("100", fundsRaised);

        let acc1Balance = await web3.eth.getBalance(accounts[1]);
        await tokenFactory.methods.withdrawFunds(accounts[1]).send({
          from: accounts[0],
          gas: '500000'
        })
        acc1BalanceNew = await web3.eth.getBalance(accounts[1]);
        acc1Balance = parseInt(acc1Balance)+100;
        assert.equal(acc1Balance, acc1BalanceNew)

        const fundsWithdrawn = await tokenFactoryFundsHolder.methods.fundsWithdrawn().call();
        assert.equal(fundsWithdrawn, "100");

      } catch(e) {
        assert.ok(false, e);
      }
    });

    it('launches standardERC20 and withdraw', async () => {
      try {
        await tokenFactory.methods.setPrice(1, "1000").send({
          from: accounts[0],
          gas: '500000'
        })
        const price = await tokenFactoryDataHolder.methods.getPrice(1).call();
        assert.equal("1000", price);
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

        const standardERC20 = new web3.eth.Contract(
          JSON.parse(JSON.stringify(StandardERC20.abi)), tokenDeployed); //load it the web3 way

        const owner = await standardERC20.methods.owner().call();
        assert.equal(owner, accounts[1]);

        const contractBalance = await standardERC20.methods.balanceOf(tokenFactory.options.address).call();
        assert.equal(0, contractBalance);

        const ownerBalance = await standardERC20.methods.balanceOf(accounts[1]).call();
        assert.equal(ownerBalance, web3.utils.toWei("20000000"));

        const name = await standardERC20.methods.name().call();
        assert.equal(name, "DelvaS");

        const symbol = await standardERC20.methods.symbol().call();
        assert.equal(symbol, "STDS");

        const supply = await standardERC20.methods.totalSupply().call();
        assert.equal(supply, "20000000000000000000000000");

        const fundsRaised = await tokenFactoryFundsHolder.methods.fundsRaised().call();
        assert.equal("1000", fundsRaised);

        let acc1Balance = await web3.eth.getBalance(accounts[1]);
        await tokenFactory.methods.withdrawFunds(accounts[1]).send({
          from: accounts[0],
          gas: '500000'
        })
        acc1BalanceNew = await web3.eth.getBalance(accounts[1]);
        acc1Balance = parseInt(acc1Balance)+1000;
        assert.equal(acc1Balance, acc1BalanceNew)

        const fundsWithdrawn = await tokenFactoryFundsHolder.methods.fundsWithdrawn().call();
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
