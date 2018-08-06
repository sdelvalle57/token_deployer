import TokenFactory from '../build/contracts/TokenFactory.json'

export default function tokenAt(tokenAddress, web3) {
    return new web3.eth.Contract(TokenFactory.abi, tokenAddress);
}
