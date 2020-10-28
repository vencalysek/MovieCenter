import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <p className="header__logo">MovieCenter</p>
            </div>

            <form action="#" className="search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search movies..."
                />
                <i className="material-icons search__icon">search</i>
            </form>
            <div className="user">User</div>
        </header>
    );
};

export default Header;
