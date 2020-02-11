import React, {Component} from 'react';
import SearchBar from './searchBar';
import {connect} from 'react-redux';
import NavBar from '../../components/header/NavBar';

class Search extends Component{
    render(){
        return(
            <section className="login-container">
                <NavBar invisible={true} loggedIn={false}/>
                <div className="row">
                    <div className="col-3 form-content">
                        <SearchBar/>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state =>{
    return{
        currentUser: state.currentUser
    }
};


export default connect(mapStateToProps)(Search);

