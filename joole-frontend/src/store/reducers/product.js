import {SET_PRODUCT_TYPES, SET_PRODUCTS, SET_SEARCH_FOCUS, RESET_SEARCH_FOCUS, SET_SEARCH_VALUE, SET_SEARCH_FILTER, RESET_SEARCH_FILTER} from '../actions/product';

const initialState = {
    types: null,
    products: null,
    searchFocus: null,
    searchValue: null,
    searchFilter: null
};

export default function productReducer(state=initialState,action){
    if(action.type === SET_PRODUCT_TYPES){  //product types
        return Object.assign({}, state, {
            types: action.productTypes
        });
    }else if(action.type === SET_PRODUCTS){  //set products
        return Object.assign({}, state, {
            products: action.products
        });
    }else if(action.type === SET_SEARCH_FOCUS){  
        return Object.assign({}, state, {
            searchFocus: action.searchFocus
        });
    }else if(action.type === RESET_SEARCH_FOCUS){  
        return Object.assign({}, state, {
            searchFocus: null
        });
    }else if(action.type === SET_SEARCH_VALUE){  
        return Object.assign({}, state, {
            searchValue: action.searchValue
        });
    }else if(action.type === SET_SEARCH_FILTER){  
        return Object.assign({}, state, {
            searchFilter: action.searchFilter
        });
    }else if(action.type === RESET_SEARCH_FILTER){  
        return Object.assign({}, state, {
            searchFilter: {
                modelYear:{min:2007, max:2020},
                airflowVal: { min: 2000, max: 10000 },
                maxPowerVal: { min: 8.00, max: 150 },
                soundVal: { min: 0, max: 100 },
                fanSweepVal: { min: 12, max: 112 }
            }  
        });
    }
    return state;
}