pragma solidity 0.4.24;

import "../../utils/SafeMath.sol";

/**
 * @title Contract to hold long term persistent data
 */
contract TokenFactoryDataHolder {
    using SafeMath for uint256;

    struct Prices {
        uint256 standardERC20price;
    } 

    enum TokenType {
        BASIC_ERC20,
        STANDARD_ERC20,
        BURNABLE_ERC20,
        PAUSABLE_ERC20,
        MINTABLE_ERC20
    }

    uint256 constant public VERSION = 1;

    uint256 public fundsRaised;
    uint256 public fundsWithdrawn;

    address public tokenFactoryImpl;

    address[] public basicTokensDeployed;
    address[] public standardTokensDeployed;
    address[] public users;

    Prices public prices;

    mapping (address => TokenType) public token;
    mapping (address => address[]) public contracts;

    modifier onlyImplementation() {
        require(msg.sender == tokenFactoryImpl);
        _;
    }

    constructor(address _tokenFactoryImpl) public {
        tokenFactoryImpl = _tokenFactoryImpl;
    }

    function setTokenFactoryImpl(address _tokenFactoryImpl) public onlyImplementation(){
        tokenFactoryImpl = _tokenFactoryImpl;
    }

    function addFunds(uint256 _amount) public onlyImplementation() {
        fundsRaised = fundsRaised.add(_amount);
    }

    function withdraw(uint256 _amount) public onlyImplementation() {
        fundsWithdrawn = fundsWithdrawn.add(_amount);
    }

    function addBasicToken(address _user, address _token) public onlyImplementation() {
        users.push(_user);
        basicTokensDeployed.push(_token);
        token[_token] = TokenType.BASIC_ERC20;
        contracts[_user].push(_token);
    }

    function addStandardToken(address _user, address _token) public onlyImplementation() {
        users.push(_user);
        standardTokensDeployed.push(_token);
        token[_token] = TokenType.STANDARD_ERC20;
        contracts[_user].push(_token);
    }

    function setStandardERC20Price(uint256 _standardERC20Price) public onlyImplementation() {
        prices.standardERC20price = _standardERC20Price;
    }

    function getStandarERC20Price() public view returns (uint256)  {
        return prices.standardERC20price;
    }

    function getContracts(address _user) public view returns (address[]) {
        return contracts[_user];
    }
    
}