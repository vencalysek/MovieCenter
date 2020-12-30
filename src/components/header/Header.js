import React from "react";
import './header.styles.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <p className="header__logo">
                    <a href="/">MovieCenter</a>
                </p>
            </div>

            {/* <form action="#" className="search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search movies..."
                />
                <i className="material-icons search__icon">search</i>
            </form> */}
            <div className="user">User</div>
        </header>
    );
};

export default Header;
