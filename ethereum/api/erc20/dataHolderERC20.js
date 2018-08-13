import DataHolderERC20 from '../../build/contracts/TokenFactoryDataHolder.json'

export default function dataHolderAt(address, web3) {
    return new web3.eth.Contract(DataHolderERC20.abi, address);
}
