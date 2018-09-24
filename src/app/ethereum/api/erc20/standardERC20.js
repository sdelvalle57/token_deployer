import StandardERC20 from '../../build/contracts/StandardERC20.json'

export default function standardTokenAt(tokenAddress, web3) {
    return new web3.eth.Contract(StandardERC20.abi, tokenAddress);
}
