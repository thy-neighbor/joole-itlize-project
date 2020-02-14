
import {API_BASE_URL} from '../../config';
//import myAxios from '../../config/interceptor';
import axios from 'axios';

//Product Action Stubs
export const SET_PRODUCT_TYPES = 'SET_PRODUCT_TYPES';
export const setProductTypes = (productTypes) => ({
    type: SET_PRODUCT_TYPES,
    productTypes
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
