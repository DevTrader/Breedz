import React from 'react';
import './Nav.css';

const NavHeader = (props) => {
    return(
        <nav className = 'header'>
            <h1> Breedz </h1>
            <div className = 'nav'>
                <div className = 'favIcon icon-container' onClick={props.openFave}><i class="far fa-heart fa-2x"></i></div>
                <div className = 'userIcon icon-container'><i class="far fa-user fa-2x"></i></div>
            </div>
        </nav>
    )
}

export default NavHeader;