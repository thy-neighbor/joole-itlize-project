
import {API_BASE_URL} from '../../config';
//import myAxios from '../../config/interceptor';
import axios from 'axios';

//Product Action Stubs
export const SET_PRODUCT_TYPES = 'SET_PRODUCT_TYPES';
export const setProductTypes = (productTypes) => ({
    type: SET_PRODUCT_TYPES,
    productTypes
});

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products
});

export const SET_SEARCH_FOCUS = 'SET_SEARCH_FOCUS';
export const setSearchFocus = (searchFocus) => ({
    type: SET_SEARCH_FOCUS,
    searchFocus
});

export const RESET_SEARCH_FOCUS = 'RESET_SEARCH_FOCUS';
export const resetSearchFocus = () => ({
    type: RESET_SEARCH_FOCUS,
    
});

export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const setSearchValue = (searchValue) => ({
    type: SET_SEARCH_VALUE,
    searchValue
});

//update search filter
export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';
export const setSearchFilter = (searchFilter) => ({
    type: SET_SEARCH_FILTER,
    searchFilter
});

//reset search filter
export const RESET_SEARCH_FILTER = 'RESET_SEARCH_FILTER';
export const resetSearchFilter = () => ({
    type: RESET_SEARCH_FILTER
});


export const retrieveProductTypes = () => dispatch => {
    //console.log("Inside of Product Type ACTION");
    return axios.get(`${API_BASE_URL}/api/product-types`)
    .then((res) => {
        console.log(res.data);
        dispatch(setProductTypes(res.data));
        
    }, (error) => {
        console.log(error);
    });
}

export const retrieveProducts = () => dispatch => {
    //console.log("Inside of Product Type ACTION");
    return axios.get(`${API_BASE_URL}/api/products`)
    .then((res) => {
        console.log(res.data);
        dispatch(setProducts(res.data));
        
    }, (error) => {
        console.log(error);
    });
}
