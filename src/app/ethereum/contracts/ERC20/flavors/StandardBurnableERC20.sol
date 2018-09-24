pragma solidity "0.4.24";

import "./BasicERC20.sol"; 
import "../StandardBurnableToken.sol"; 

contract StandardBurnableERC20 is BasicERC20, StandardBurnableToken {

    constructor(string _name, string _symbol, uint256 _initialSupply) BasicERC20(_name, _symbol, _initialSupply) public {
        
    }
}