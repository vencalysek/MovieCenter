import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'


const Sidebar = () => {


    return (
        <div className="sidebar">
            <ul className="side-nav">

                {SidebarData.map((item, index) => {
                    return (

                        <li className='side-nav__item' key={index}>
                            <NavLink to={item.path} exact className="side-nav__link" activeClassName='side-nav__link--active'>
                                {item.icon}
                                <span className="side-nav__title">
                                    {item.title}
                                </span>
                            </NavLink>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
};

export default Sidebar;
