import React, {Component} from 'react';
import SearchBar from './searchBar';
import {connect} from 'react-redux';
import {retrieveProductTypes} from '../../store/actions/product';
import NavBar from '../../components/header/NavBar';

class Search extends Component{
     constructor(props){
        super(props);
        this.props.retrieveProductTypes();
    } 


    render(){
        console.log("Inside of SEARCH RENDER");
        console.log(this);
        return(
            <section className="login-container">
                <NavBar invisible={true} loggedIn={false}/>
                <div className="row">
                    <div className="col-3 form-content">
                        <SearchBar types={this.props.types}/>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state =>{
    return{
        currentUser: state.auth.currentUser,
        types: state.product.types
    }
};


export default connect(mapStateToProps,{retrieveProductTypes})(Search);

