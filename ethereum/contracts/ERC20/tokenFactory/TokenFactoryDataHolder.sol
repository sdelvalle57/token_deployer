pragma solidity ^0.4.24;

import "../../utils/Ownable.sol";
import "../../utils/SafeMath.sol";

/**
 * @title Contract to hold long term persistent data
 */
contract TokenFactoryDataHolder is Ownable {
    using SafeMath for uint256;

    uint256 public fundsRaised;
    uint256 public fundsWithdrawn;
    address public tokenFactoryImpl;
    address[] public basicTokensDeployed;
    address[] public standardTokensDeployed;
    address[] public users;

    modifier onlyImplementation() {
        require(msg.sender == owner);
        _;
    }

    constructor(address _tokenFactoryImpl) public {
        tokenFactoryImpl = _tokenFactoryImpl;
    }

    function setTokenFactoryImpl(address _tokenFactoryImpl) public onlyImplementation(){
        tokenFactoryImpl = _tokenFactoryImpl;
    }

    function addFundsRaised(uint256 _amount) public onlyImplementation() {
        fundsRaised = fundsRaised.add(_amount);
    }

    function withdraw(address _destinatary) public onlyImplementation() {
        fundsWithdrawn = fundsWithdrawn.add(address(this).balance);
        _destinatary.transfer(address(this).balance);
    }

    function addBasicTokenDeployed(address _token) public onlyImplementation() {
        basicTokensDeployed.push(_token);
    }

    function addStandardTokensDeployed(address _token) public onlyImplementation() {
        standardTokensDeployed.push(_token);
    }

    function addUser(address _user) public onlyImplementation() {
        users.push(_user);
    }
    
}