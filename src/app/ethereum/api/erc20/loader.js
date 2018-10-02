import BasicERC20 from '../../build/contracts/BasicERC20.json'
import DataHolder from '../../build/contracts/ERC20FactoryDataHolder.json'
import Ownership from '../../build/contracts/Ownable.json'
import ERC20Factory from '../../build/contracts/ERC20Factory.json'
import StandardERC20 from '../../build/contracts/StandardERC20.json'

export function erc20Factory(address, web3) {
    return new web3.eth.Contract(ERC20Factory.abi, address);
}

export function erc20DataHolder(address, web3) {
    return new web3.eth.Contract(DataHolder.abi, address);
}

export function ownership(address, web3) {
    return new web3.eth.Contract(Ownership.abi, address);
}



export function basicERC20(tokenAddress, web3) {
    return new web3.eth.Contract(BasicERC20.abi, tokenAddress);
}

export function standardERC20(tokenAddress, web3) {
    return new web3.eth.Contract(StandardERC20.abi, tokenAddress);
}
