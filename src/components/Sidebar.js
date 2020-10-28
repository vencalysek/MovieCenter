import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="#" className="side-nav__link">
                        <i className="material-icons side-nav__icon">home</i>
                        <span className="side-nav__text" >Home</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <i className="material-icons side-nav__icon">airplay</i>
                        <span className="side-nav__text" >Now Playing</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <i className="material-icons side-nav__icon">whatshot</i>
                        <span className="side-nav__text" >Popular</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <i className="material-icons side-nav__icon">star</i>
                        <span className="side-nav__text" >Top Rated</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <i className="material-icons side-nav__icon">
                            fast_forward
                        </i>
                        <span className="side-nav__text" >Upcoming</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
