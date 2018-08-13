import BasicERC20 from '../build/contracts/BasicERC20.json'

export default function basicTokenAt(tokenAddress, web3) {
    return new web3.eth.Contract(BasicERC20.abi, tokenAddress);
}
