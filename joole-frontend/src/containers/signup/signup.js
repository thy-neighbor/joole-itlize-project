import React ,{Component} from 'react';
import NavBar from '../../components/header/NavBar';
import SignupForm from './signupForm/signupForm';
import '../login/form.css'

import { registerUser } from '../../store/actions/auth'

export class Signup extends Component{
    constructor(props){
        super(props);
    }

    onSubmitForm = (fields) =>{
        console.log(fields);
        registerUser(fields);
    }
    
    render(){
        return(
            <section className="login-container">
                <NavBar invisible={true} loggedIn={false}/>
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