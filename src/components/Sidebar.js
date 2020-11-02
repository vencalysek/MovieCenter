import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item">
                    <NavLink
                        exact
                        to="/"
                        className="side-nav__link"
                        activeClassName="side-nav__link--active"
                    >
                        <i className="material-icons side-nav__icon">home</i>
                        <span className="side-nav__text">Home</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink
                        to="/now-playing"
                        className="side-nav__link"
                        activeClassName="side-nav__link--active"
                    >
                        <i className="material-icons side-nav__icon">airplay</i>
                        <span className="side-nav__text">Now Playing</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink
                        to="/popular"
                        className="side-nav__link"
                        activeClassName="side-nav__link--active"
                    >
                        <i className="material-icons side-nav__icon">
                            whatshot
                        </i>
                        <span className="side-nav__text">Popular</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink
                        to="/top-rated"
                        className="side-nav__link"
                        activeClassName="side-nav__link--active"
                    >
                        <i className="material-icons side-nav__icon">star</i>
                        <span className="side-nav__text">Top Rated</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink
                        to="/upcoming"
                        className="side-nav__link"
                        activeClassName="side-nav__link--active"
                    >
                        <i className="material-icons side-nav__icon">
                            fast_forward
                        </i>
                        <span className="side-nav__text">Upcoming</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
