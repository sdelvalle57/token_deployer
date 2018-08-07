pragma solidity 0.4.24;

import "../BasicToken.sol"; 
import "../../utils/Ownable.sol";

contract DetailedERC20 is BasicToken {

    string public name;
    string public symbol;
    uint256 public decimals = 18;
    
}