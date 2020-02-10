import React ,{Component} from 'react';
import NavBar from '../../components/header/NavBar';
import LoginForm from './loginForm/loginForm';
import './login.css';
import './form.css';

import {login} from '../../actions/auth'

export class Login extends Component{
    constructor(props){
        super(props);
    }

    onSubmitForm = (fields) =>{
        console.log(fields);
        login(fields.username,fields.password);
    }
    
    render(){
        return(
            <section className="login-container">
                <NavBar invisible={true} loggedIn={false}/>
                <div className="row">
                    <div className="col-3 form-content">
                        <LoginForm loginSubmit={fields => this.onSubmitForm(fields)}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;

