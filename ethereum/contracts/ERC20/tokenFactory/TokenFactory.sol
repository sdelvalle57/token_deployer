pragma solidity 0.4.24;

import "./TokenFactoryInterface.sol";   
import "./TokenFactoryDataHolder.sol";
import "../flavors/BasicERC20.sol";
import "../flavors/StandardERC20.sol";
import "../../utils/Ownable.sol";

/**
 * @title Contract to hold long term persistent data
 */
contract TokenFactory is TokenFactoryInterface, Ownable  { 

    TokenFactoryDataHolder dataHolder; 

    function setDataHolder(address _dataHolder) external onlyOwner() {
        require(_dataHolder != address(0), "Data holder cannot be 0 address");
        dataHolder = TokenFactoryDataHolder(_dataHolder);
    }

    function setStandardERC20Price(uint256 _price) external onlyOwner() {
        require(_price >0, "Price must be greater than 0");
        dataHolder.setStandardERC20Price(_price);
    }

    function withdrawFunds(address _destinatary) external onlyOwner() {
        uint256 amount = address(this).balance;
        require(amount > 0, "Cannot transfer 0 balance");
        dataHolder.withdraw(amount);
        address(_destinatary).transfer(amount);
        emit FundsWithdrawn( amount, _destinatary);
    }

    function setTokenFactoryImpl(address _tokenFactoryImpl) external onlyOwner() {
        require(_tokenFactoryImpl != address(0));
        dataHolder.setTokenFactoryImpl(_tokenFactoryImpl);
    }

    function createBasicToken(string _name, string _symbol, uint256 _initialSupply) external payable {
        BasicERC20 token = new BasicERC20(_name, _symbol, _initialSupply);
        token.transferOwnership(msg.sender);
        dataHolder.addBasicToken(msg.sender, address(token));
        if(msg.value > 0) {
            dataHolder.addFunds(msg.value); 
            emit FundAdded(msg.value); 
        }
    }
    
    function createStandardToken(string _name, string _symbol, uint256 _initialSupply) external payable {
        require(msg.value >= dataHolder.getStandarERC20Price(), "Value sent is not enough");
        StandardERC20 token = new StandardERC20(_name, _symbol, _initialSupply);
        token.transferOwnership(msg.sender);
        dataHolder.addStandardToken(msg.sender, address(token));
        dataHolder.addFunds(msg.value); 
        emit FundAdded(msg.value);
    }

    function getDataHolder() external view  returns(address) {
        return address(dataHolder);   
    } 
}