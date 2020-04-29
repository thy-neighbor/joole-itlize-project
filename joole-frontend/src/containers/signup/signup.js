import React ,{Component} from 'react';
import NavBar from '../../components/header/NavBar';
import SignupForm from './signupForm/signupForm';
import {Redirect} from 'react-router-dom';
import '../login/form.css'

import { registerUser } from '../../store/actions/auth'

export class Signup extends Component{
    constructor(props){
        super(props);

        this.state = {
            registered:false,

        };
    }

    onSubmitForm = (fields) =>{
        console.log(fields);
        registerUser(fields)

        this.setState({
            registered:true,
        });

    }
    
    render(){
        if(this.state.registered){
            return <Redirect to="/login"/>;
        }
        return(
            <section className="login-container">
                <NavBar invisible={true} loggedIn={false} link="login"/>
                <div className="row">
                    <div className="col-3 form-content">
                        <SignupForm signupSubmit={fields => this.onSubmitForm(fields)}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signup;