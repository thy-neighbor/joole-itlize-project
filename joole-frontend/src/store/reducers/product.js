import {SET_PRODUCT_TYPES} from '../actions/product';

const initialState = {
    types: null
};

export default function productReducer(state=initialState,action){
    if(action.type === SET_PRODUCT_TYPES){  //product types
        return Object.assign({}, state, {
            types: action.productTypes
        });
    }
    return state;
}