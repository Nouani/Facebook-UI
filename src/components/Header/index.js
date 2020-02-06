import React from 'react';

import './styles.css';

function Header() {
    return (
        <header>
            <img src="https://i.imgur.com/KDIDiSE.png"/>
            <div>
                <span>Meu perfil</span>
                <i className="material-icons">account_circle</i>
            </div>
        </header>
    )
}

export default Header;