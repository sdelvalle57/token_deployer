import DataHolder from '../../build/contracts/ERC20FactoryDataHolder.json'

export default function basicTokenAt(address, web3) {
    return new web3.eth.Contract(DataHolder.abi, address);
}
