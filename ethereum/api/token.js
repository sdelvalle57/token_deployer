import BasicToken from '../build/contracts/BasicToken.json'

export default function tokenAt(tokenAddress, web3) {
    return new web3.eth.Contract(BasicToken.abi, tokenAddress);
}
