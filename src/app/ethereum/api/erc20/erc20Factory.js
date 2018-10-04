import ERC20Factory from '../../build/contracts/ERC20Factory.json'

export default function erc20FactoryAt(address, web3) {
    return new web3.eth.Contract(ERC20Factory.abi, address);
}
