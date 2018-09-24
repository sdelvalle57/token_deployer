import {HOME_PAGE, STARTER_PACK_PAGE, ETH_LOAN_PACK_PAGE, VISION_PAGE} from '../actions/types';


const initialState = {
    currentPage: HOME_PAGE
}

export default function(state= initialState, action) {
    console.log("red", action.type);
    switch (action.type) {
       
        case HOME_PAGE:
            return initialState;
        case STARTER_PACK_PAGE:
            return {
                ...state,
                currentPage: STARTER_PACK_PAGE
            }
        case ETH_LOAN_PACK_PAGE:
            return {
                ...state,
                currentPage: ETH_LOAN_PACK_PAGE
            }
        case VISION_PAGE:
            return {
                ...state,
                currentPage: VISION_PAGE
            }
        default: return state;
    }
}