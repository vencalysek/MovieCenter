import React from "react";
import Search from "../searchbar/Search";
import './header.styles.scss'

const Header = ({getQuery}) => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <p className="header__logo">
                    <a href="/">MovieCenter</a>
                </p>
            </div>
            <Search getQuery={getQuery} />

            <div className="user">User</div>
        </header>
    );
};

export default Header;
