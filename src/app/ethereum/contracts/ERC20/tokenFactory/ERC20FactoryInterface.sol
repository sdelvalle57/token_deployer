pragma solidity "0.4.24";

import "../flavors/BasicERC20.sol";

/**
 * @title ERC20Factory interface
 */
contract ERC20FactoryInterface {
    function setHolders(address _dataHolder, address _fundsHolder) external;
    function setPrice(uint8 _index, uint256 _price) external;
    function withdrawFunds(address _destinatary) external;
    function setTokenFactoryImpl(address _tokenFactoryImpl) external;
    
    function createBasicToken(string _name, string _symbol, uint256 _initialSupply) external payable ;
    function createStandardToken(string _name, string _symbol, uint256 _initialSupply) external payable ;
    //function createStandardBurnableToken(address from, address to, uint256 value) public returns (bool);
    //function createPausableToken(address spender, uint256 value) public returns (bool);
    //function createMintableToken(address spender, uint256 value) public returns (bool);
    //function createCappedToken(address spender, uint256 value) public returns (bool);
    function _setOwnerhsip(BasicERC20 _token) private;
    function getDataHolder() external view  returns(address);
    function getFundsHolder() external view  returns(address);
    function getPrice(uint8 _index) external view returns(uint256);
    function getContracts(address _user) public view returns (address[]);
    
    event FundAdded(uint256 amount);
    event FundsWithdrawn(uint256 amount, address destinatary);
    event TokenCreated(address indexed token, address indexed owner, string symbol);
    
    
    
}