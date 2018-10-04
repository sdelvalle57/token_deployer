pragma solidity "0.4.24";

import "./ERC20FactoryInterface.sol";   
import "./ERC20FactoryDataHolder.sol";
import "./ERC20FactoryFundsHolder.sol";
import "../flavors/BasicERC20.sol";
import "../flavors/StandardERC20.sol";
import "../flavors/StandardBurnableERC20.sol";
import "../../utils/Ownable.sol";

/**
 * @title Contract to hold long term persistent data
 */
contract ERC20Factory is ERC20FactoryInterface, Ownable  { 

    uint256 constant public VERSION = 2;

    ERC20FactoryDataHolder dataHolder; 
    ERC20FactoryFundsHolder fundsHolder;

    function setHolders(address _dataHolder, address _fundsHolder) external onlyOwner {
        require(_dataHolder != address(0), "Data holder cannot be 0 address");
        require(_fundsHolder != address(0), "Funds holder cannot be 0 address");
        dataHolder = ERC20FactoryDataHolder(_dataHolder);
        fundsHolder = ERC20FactoryFundsHolder(_fundsHolder);
    }

    function setPrice(uint8 _index, uint256 _price) external onlyOwner  {
        require(_price >= 0, "Price must be equal or greater than 0");
        dataHolder.setPrice(_index, _price);
    }

    function withdrawFunds(address _destinatary) external onlyOwner {
        uint256 amount = address(this).balance;
        require(amount > 0, "Cannot transfer 0 balance");
        fundsHolder.withdraw(amount);
        address(_destinatary).transfer(amount);
        emit FundsWithdrawn( amount, _destinatary);
    }

    function setTokenFactoryImpl(address _tokenFactoryImpl) external onlyOwner {
        require(_tokenFactoryImpl != address(0));
        dataHolder.setTokenFactoryImpl(_tokenFactoryImpl);
        fundsHolder.setTokenFactoryImpl(_tokenFactoryImpl);
    }

    function createBasicToken(string _name, string _symbol, uint256 _initialSupply) external payable {
        require(msg.value >= dataHolder.getPrice(0), "Value sent is not enough");
        BasicERC20 token = new BasicERC20(_name, _symbol, _initialSupply);
        _setOwnerhsip(token);
        dataHolder.addBasicToken(msg.sender, address(token));
        if(msg.value > 0) {
            fundsHolder.addFunds(msg.value); 
            emit FundAdded(msg.value); 
        }
    }
    
    function createStandardToken(string _name, string _symbol, uint256 _initialSupply) external payable {
        require(msg.value >= dataHolder.getPrice(1), "Value sent is not enough");
        StandardERC20 token = new StandardERC20(_name, _symbol, _initialSupply);
        _setOwnerhsip(token);
        dataHolder.addStandardToken(msg.sender, address(token));
        fundsHolder.addFunds(msg.value); 
        emit FundAdded(msg.value);
    }

    function createStandardBurnableToken(string _name, string _symbol, uint256 _initialSupply) external payable {
        require(msg.value >= dataHolder.getPrice(2), "Value sent is not enough");
        StandardBurnableERC20 token = new StandardBurnableERC20(_name, _symbol, _initialSupply);
        _setOwnerhsip(token);
        dataHolder.addStandardBurnableToken(msg.sender, address(token));
        fundsHolder.addFunds(msg.value); 
        emit FundAdded(msg.value);
    }

    function _setOwnerhsip(BasicERC20 _token) private {
        _token.transfer(msg.sender, _token.balanceOf(this));
        _token.transferOwnership(msg.sender);
    }

    function getDataHolder() external view  returns(address) {
        return address(dataHolder);   
    } 

    function getFundsHolder() external view  returns(address) {
        return address(fundsHolder);   
    } 

    function getPrice(uint8 _index) external view returns(uint256) {
        return dataHolder.getPrice(_index);
    }

    function getContracts(address _user) public view returns (address[]) {
        return dataHolder.getContracts(_user);
    }
}