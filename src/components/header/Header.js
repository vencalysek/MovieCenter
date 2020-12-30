import React from "react";
import Search from "../searchbar/Search";
import './header.styles.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <p className="header__logo">
                    <a href="/">MovieCenter</a>
                </p>
            </div>
            <Search />

            <div className="user">User</div>
        </header>
    );
};

export default Header;
