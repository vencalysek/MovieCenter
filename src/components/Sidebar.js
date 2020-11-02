import React, { useState } from "react";
import { Link } from 'react-router-dom'


const Sidebar = () => {

    return (
        <div className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <Link to="/" className="side-nav__link">
                        <i className="material-icons side-nav__icon">home</i>
                        <span className="side-nav__text" >Home</span>
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link to="/now-playing" className="side-nav__link">
                        <i className="material-icons side-nav__icon">airplay</i>
                        <span className="side-nav__text" >Now Playing</span>
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link to="/popular" className="side-nav__link">
                        <i className="material-icons side-nav__icon">whatshot</i>
                        <span className="side-nav__text" >Popular</span>
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link to="/top-rated" className="side-nav__link">
                        <i className="material-icons side-nav__icon">star</i>
                        <span className="side-nav__text" >Top Rated</span>
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link to="/upcoming" className="side-nav__link">
                        <i className="material-icons side-nav__icon">
                            fast_forward
                        </i>
                        <span className="side-nav__text" >Upcoming</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
