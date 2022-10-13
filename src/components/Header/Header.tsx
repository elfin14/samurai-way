import React from 'react';
import skull from "../skull.svg";
import swords from "../Header/swords.png";
import '../Header/header.css';

function Header() {
    return (
        <div className="header__wrapper">
            <div className="header__wrapper-img">
                <img src='https://garsidej.files.wordpress.com/2016/05/coursework-1.jpg?w=768' className="header__wrapper-background"/>
            </div>
            <div className="header">
                <div className="header__logo">
                    <img src={skull} className="img"></img>
                    <p className="header__text">Pirat</p>
                </div>
                <div className="header__entry">
                    <button className="header__button">Log In</button>
                </div>

            </div>
        </div>
    );
}

export default Header;