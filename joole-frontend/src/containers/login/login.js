import React ,{Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../../components/header/NavBar';
import LoginForm from './loginForm/loginForm';
import './login.css';
import './form.css';

import {loginUser} from '../../store/actions/auth'

export class Login extends Component{
    
    onSubmitForm = (fields) =>{
        this.props.loginUser(fields.username,fields.password)
    }
    
    render(){
        console.log(this.props);
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
const mapStateToProps = state =>{
    return{
        currentUser: state.auth.currentUser
    }
};


export default connect(mapStateToProps , {loginUser})(Login);

