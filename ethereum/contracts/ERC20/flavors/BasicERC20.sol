pragma solidity 0.4.24;

import "../../utils/Ownable.sol";

<<<<<<< HEAD
contract BasicERC20 is BasicToken, Ownable {
=======
contract BasicERC20 is Ownable {
>>>>>>> master

    string public name;
    string public symbol;
    uint256 public decimals = 18;

    constructor(string _name, string _symbol, uint256 _initialSupply) public {
        uint256 INITIAL_SUPPLY = _initialSupply * (10 ** uint256(decimals));
        totalSupply_ = INITIAL_SUPPLY;
        name = _name;
        symbol = _symbol;
        balances[msg.sender] = INITIAL_SUPPLY;
        emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);
    }
}