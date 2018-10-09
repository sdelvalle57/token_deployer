import {ERC20_SUMMARY, ERC20_SUMMARY_ERROR, 
    ERC20_SUMMARY_LOADING, ERC20_DEPLOYED_TOKENS} from '../actions/types';

const initialState = {
    summary: {
        data: {},
        error: false,
        message: '',
        loading: false
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        
        case ERC20_SUMMARY:
            return {
                ...state,
                summary: {
                    data: action.summary,
                    error: false,
                    message: '',
                    loading: false
                } 
            }
        case ERC20_SUMMARY_ERROR:
            return {
                ...state,
                summary: {
                    data: {},
                    error: true,
                    message: action.error,
                    loading: false
                } 
            }
        case ERC20_SUMMARY_LOADING:
            return {
                ...state,
                summary: {
                    data: {},
                    error: false,
                    message:'',
                    loading: true
                } 
            }      
       
        default: return state;
    }
} 

