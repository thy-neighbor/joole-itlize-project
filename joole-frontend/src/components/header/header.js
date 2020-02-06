
import React from 'react';

const Header = (props) => {
    if(props.invisibleHeader && !props.loggedIn){    //if true first form for login w/ out signup
        return(
            <section className="header large-header">
            <div>
                <span class="right">
                    <a href="/signup">Sign up</a>
                </span>
            </div>
            <div>
                <span class="center">
                    <img class="big-logo" src="https://via.placeholder.com/350x150" alt="joole logo"></img>
                    <p class="tag-line">Building Product Selection Platform</p>
                </span>
            </div>
            </section>
        );


    }
}

export default Header;

//maybe make children for logo stuff and user stuff