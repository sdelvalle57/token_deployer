pragma solidity 0.4.24;

/**
 * @title TokenFactory interface
 */
contract TokenFactoryInterface {
    function setDataHolder(address _dataHolder) external;
    function setStandardERC20Price(uint256 _price) external;
    function withdrawFunds(address _destinatary) external;
    function setTokenFactoryImpl(address _tokenFactoryImpl) external;
    
    function createBasicToken(string _name, string _symbol, uint256 _initialSupply) external payable ;
    function createStandardToken(string _name, string _symbol, uint256 _initialSupply) external payable ;
    //function createStandardBurnableToken(address from, address to, uint256 value) public returns (bool);
    //function createPausableToken(address spender, uint256 value) public returns (bool);
    //function createMintableToken(address spender, uint256 value) public returns (bool);
    //function createCappedToken(address spender, uint256 value) public returns (bool);
    event FundAdded(uint256 amount);
    event FundsWithdrawn(uint256 amount, address destinatary);
    event TokenCreated(address indexed token, address indexed owner, string symbol);

}