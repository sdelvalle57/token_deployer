pragma solidity 0.4.24;

import "../StandardToken.sol"; 
import "../../utils/Ownable.sol";

contract StandardERC20 is StandardToken, Ownable {
    string public name; 
    string public symbol; 
    uint8 public constant decimals = 18; 

    constructor(string _name, string _symbol, uint256 _initialSupply) public {
        uint256 INITIAL_SUPPLY = _initialSupply * (10 ** uint256(decimals));
        totalSupply_ = INITIAL_SUPPLY;
        name = _name;
        symbol = _symbol;
        balances[msg.sender] = INITIAL_SUPPLY;
        emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);
    }
}