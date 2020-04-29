import React from 'react';
import './NavBar.css';
import '../../containers/search/search.css';
import logo from './joole-logo.png';
import SearchBar from '../../containers/search/searchBar';

export const NavBar = (props) => {
    if(props.invisible && !props.loggedIn){    //if true first form for login w/ out signup
        return(
            <header className="header large-header">
                <div className="nav-link">
                    <span class="right">
                        {props.link==="login" ?<a href="/login">Login</a> : <a href="/signup">Sign up</a>}
                    </span>
                </div>
                <div className="low-center">
                    <div className="spacer"></div>
                        <img className="big-logo" src={logo} alt="joole logo"></img>
                        <p className="tag-line">Building Product Selection Platform</p>
                </div>
            </header>
        );
            
        
    }else if(props.invisible && props.loggedIn){
        return(
        <header className="header large-header">
            <div className="nav-link">
                <span class="right">

                    <a href="/projects">Projects</a>

                    <span className="profile-img-container">
                            <img className="profile-img" src={props.loggedIn.image} alt="profile"/>
                    </span>
                </span>
            </div>
            <div className="low-center">
                <span class="center">
                    <img class="big-logo" src={logo} alt="joole logo"/>
                    <p class="tag-line">Building Product Selection Platform</p>
                </span>
            </div>
        </header>
        );
    }
    return(
        <header className="header small-header">
            <div className="row">
                <div className="col-2"> 
                    <span class="left">
                        <img class="small-logo" src={logo} alt="joole logo"/>
                    </span>
                </div>

                <div className="col-5 align-self-center">
                    <SearchBar/>
                </div>

                <div class="col-3">
                    <span>
                        <a href="/projects">Projects</a>
                    </span>
                    <span>
                        <div className="profile-img-container">
                            <img className="profile-img" src={props.loggedIn.image} alt="profile"/>
                        </div>
                    </span>
                </div>
            </div>
        </header>
    );
    

};

export default NavBar;

//maybe make children for logo stuff and user stuff