pragma solidity 0.4.24;

import "../../utils/SafeMath.sol";

/**
 * @title Contract to hold long term persistent data
 */
contract ERC20FactoryDataHolder {
    using SafeMath for uint256;

    uint256 constant public VERSION = 1;

    uint256 public fundsRaised;
    uint256 public fundsWithdrawn;

    address public tokenFactoryImpl;

    address[] public basicTokensDeployed;
    address[] public standardTokensDeployed;
    address[] public standardBurnableTokensDeployed;
    address[] public pausableTokensDeployed;
    address[] public mintableTokensDeployed;
    address[] public cappedTokensDeployed;
    address[] public users;

    mapping (address => address[]) public contracts;
    mapping (uint8 => uint256) public price; //0 is basic, 1 is standard, ....

    modifier onlyImplementation() {
        require(msg.sender == tokenFactoryImpl);
        _;
    }

    constructor(address _tokenFactoryImpl) public {
        tokenFactoryImpl = _tokenFactoryImpl;
    }

    function setTokenFactoryImpl(address _tokenFactoryImpl) public onlyImplementation {
        tokenFactoryImpl = _tokenFactoryImpl;
    }

    function addFunds(uint256 _amount) public onlyImplementation {
        fundsRaised = fundsRaised.add(_amount);
    }

    function withdraw(uint256 _amount) public onlyImplementation {
        fundsWithdrawn = fundsWithdrawn.add(_amount);
    }

    function addBasicToken(address _user, address _token) public onlyImplementation {
        users.push(_user);
        basicTokensDeployed.push(_token);
        contracts[_user].push(_token);
    }

    function addStandardToken(address _user, address _token) public onlyImplementation {
        users.push(_user);
        standardTokensDeployed.push(_token);
        contracts[_user].push(_token);
    }

    function addStandardBurnableToken(address _user, address _token) public onlyImplementation {
        users.push(_user);
        standardBurnableTokensDeployed.push(_token);
        contracts[_user].push(_token);
    }

    function addPausableTokensDeployed(address _user, address _token) public onlyImplementation {
        users.push(_user);
        pausableTokensDeployed.push(_token);
        contracts[_user].push(_token);
    }

    function addMintableTokensDeployed(address _user, address _token) public onlyImplementation {
        users.push(_user);
        mintableTokensDeployed.push(_token);
        contracts[_user].push(_token);
    }

    function addCappedTokensDeployed(address _user, address _token) public onlyImplementation {
        users.push(_user);
        cappedTokensDeployed.push(_token);
        contracts[_user].push(_token);
    }

    function setPrice(uint8 _index, uint256 _price) public onlyImplementation {
        price[_index] = _price;
    }

    function getPrice(uint8 _index) public view returns (uint256)  {
        return price[_index];
    }

    function getContracts(address _user) public view returns (address[]) {
        return contracts[_user];
    }
    
}