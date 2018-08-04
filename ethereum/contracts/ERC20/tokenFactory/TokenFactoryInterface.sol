pragma solidity ^0.4.24;

/**
 * @title TokenFactory interface
 */
contract TokenFactoryInterface {
    function createBasicToken(string _name, string _symbol, uint256 _initialSupply) external returns (bool);
    function createStandardToken(string _name, string _symbol, uint256 _initialSupply) external payable returns (bool);
    //function createStandardBurnableToken(address from, address to, uint256 value) public returns (bool);
    //function createPausableToken(address spender, uint256 value) public returns (bool);
    //function createMintableToken(address spender, uint256 value) public returns (bool);
    //function createCappedToken(address spender, uint256 value) public returns (bool);
    event TokenCreated(address indexed token, address indexed owner, string symbol);
}