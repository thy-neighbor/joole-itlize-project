import React, {Component} from 'react';
import SearchBar from './searchBar';
import {connect} from 'react-redux';
import {retrieveProductTypes} from '../../store/actions/product';
import NavBar from '../../components/header/NavBar';
import requiresLogin from '../../hoc/requires-login';
import './search.css';
import {setSearchValue, setSearchFocus} from '../../store/actions/product';
import {Redirect} from 'react-router-dom';

class Search extends Component{
     constructor(props){
        super(props);
        this.props.retrieveProductTypes();
        if(this.props.searchValue){this.props.resetSearchFocus();}  //if a value already exist
        
        //i should clear search value here too
    } 

    handleSearchSubmit = (input) =>{
        input.preventDefault();
        let val = document.getElementById('product-search').value;
        console.log("Handle Search Submit ", val);
        
        this.props.setSearchValue(val);

    }

    render(){
        if(this.props.searchValue){
            return <Redirect to={`/products?q=${this.props.searchValue}`}/>;
        }
        return(
            <section className="login-container">
                <NavBar invisible={true} loggedIn={this.props.currentUser}/>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <SearchBar types={this.props.types} handleSearchSubmit={(input) => this.handleSearchSubmit(input)}/>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state =>{
    return{
        currentUser: state.auth.currentUser,
        types: state.product.types,
        searchValue: state.product.searchValue,
        searchFocus: state.product.serachFocus
    }
};


export default requiresLogin()(connect(mapStateToProps,{retrieveProductTypes, setSearchValue, setSearchFocus})(Search));

