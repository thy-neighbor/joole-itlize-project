import {API_BASE_URL} from '../config';
import axios from 'axios';

const options = {
    headers: {'Content-Type': 'application/json'}
  };


export const loginUser = (username,password) => //dispatch =>
{
    console.log("Inside of LOGIN ACTION");
    return axios.post(`${API_BASE_URL}/authenticate`,{username,password},options)
    .then((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
}

export const registerUser = (user) => //dispatch =>
{
    console.log("Inside of LOGIN ACTION");
    return axios.post(`${API_BASE_URL}/signup`,user,options)
    .then((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
}