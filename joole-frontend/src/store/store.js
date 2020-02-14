import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import productReducer from './reducers/product'
import {setAuthToken, authSuccess} from './actions/auth';
import {loadUser} from '../utilities/local-storage';


const store = createStore(
    combineReducers({
        auth:authReducer,
        product:productReducer
    }),
    applyMiddleware(thunk)
);

const authUser=loadUser();  //loads current user if they exist in local storage on return

if(authUser){   //if they exist
    const token = authUser.jwt;
    //this is where we would check if the token expired or not DONT FORGET
    store.dispatch(setAuthToken(token));
    store.dispatch(authSuccess(authUser));
}

export default store; 