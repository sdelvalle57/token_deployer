import {ERC20_ADDRESS} from './types';

export const setERC20Address = (erc20Address) => dispatch => {
    dispatch({
        type: ERC20_ADDRESS,
        address: erc20Address
    })
}


