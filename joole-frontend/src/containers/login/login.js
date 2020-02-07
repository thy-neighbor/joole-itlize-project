import React ,{Component} from 'react';
import NavBar from '../../components/header/NavBar'

export class Login extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <section className="login-container">
                <NavBar invisible={true} loggedIn={false}/>
            </section>
        );
    }
}

export default Login;