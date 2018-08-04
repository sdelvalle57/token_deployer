pragma solidity ^0.4.24;

import "./TokenFactoryInterface.sol";
import "../../utils/Ownable.sol";
import "./TokenFactoryDataHolder.sol";

/**
 * @title Contract to hold long term persistent data
 */
contract TokenFactory is TokenFactoryInterface, Ownable {

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function createBasicToken(string _name, string _symbol, uint256 _initialSupply) external returns (bool) {

    }
    
    function createStandardToken(string _name, string _symbol, uint256 _initialSupply) external payable returns (bool) {

    }
}