import React from 'react';
import './NavBar.css';

export const NavBar = (props) => {
    if(props.invisible && !props.loggedIn){    //if true first form for login w/ out signup
        return(
            <header className="header large-header">
                <div className="nav-link">
                    <span class="right">
                        <a href="/signup">Sign up</a>
                    </span>
                </div>
                <div className="low-center">
                    <div className="spacer"></div>
                        <img className="big-logo" src="https://via.placeholder.com/350x150" alt="joole logo"></img>
                        <p className="tag-line">Building Product Selection Platform</p>
                    
                </div>
            </header>
        );
            
        
    }else if(props.invisible && props.loggedIn){
        return(
        <header className="header large-header">
            <div>
                <span class="right">
                    <span>
                        <a href="/projects">Projects</a>
                    </span>
                    <span>
                        <div className="profile-img-container">
                            <img className="profile-img" src="https://via.placeholder.com/150" alt="profile"/>
                        </div>
                    </span>
                </span>
            </div>
            <div className="low-center">
                <span class="center">
                    <img class="big-logo" src="https://via.placeholder.com/350x150" alt="joole logo"/>
                    <p class="tag-line">Building Product Selection Platform</p>
                </span>
            </div>
        </header>
        );
    }
    return(
        <header className="header small-header">
            <div>
                <div>
                    <span class="left">
                        <img class="small-logo" src="https://via.placeholder.com/50x80" alt="joole logo"/>
                    </span>
                </div>
                <span class="right">
                    <span>
                        <a href="/projects">Projects</a>
                    </span>
                    <span>
                        <div className="profile-img-container">
                            <img className="profile-img" src="https://via.placeholder.com/150" alt="profile"/>
                        </div>
                    </span>
                </span>
            </div>
        </header>
    );
    

};

export default NavBar;

//maybe make children for logo stuff and user stuff