pragma solidity "0.4.24";

import "../../utils/SafeMath.sol";

/**
 * @title Contract to hold long term persistent data
 */
contract ERC20FactoryFundsHolder {
    using SafeMath for uint256;

    uint256 constant public VERSION = 1;

    uint256 public fundsRaised;
    uint256 public fundsWithdrawn;

    address public tokenFactoryImpl;
    address public prevVersion;

    mapping (address => uint256) public balance;

    modifier onlyImplementation() {
        require(msg.sender == tokenFactoryImpl);
        _;
    }

    constructor(address _tokenFactoryImpl, address _prevVersion) public {
        tokenFactoryImpl = _tokenFactoryImpl;
        prevVersion = _prevVersion;
    }

    function setTokenFactoryImpl(address _tokenFactoryImpl) public onlyImplementation {
        tokenFactoryImpl = _tokenFactoryImpl;
    }

    function addFunds(uint256 _amount) public onlyImplementation {
        fundsRaised = fundsRaised.add(_amount);
    }

    function withdraw(uint256 _amount) public onlyImplementation() {
        fundsWithdrawn = fundsWithdrawn.add(_amount);
    }
}