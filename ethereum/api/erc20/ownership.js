import Ownership from '../../build/contracts/Ownable.json'

export default function ownershipAt(address, web3) {
    return new web3.eth.Contract(Ownership.abi, address);
}
