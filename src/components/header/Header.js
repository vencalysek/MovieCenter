import React from "react";
import Search from "../searchbar/Search";
import "./header.styles.scss";

import HeaderUserSection from "../header-user-section/HeaderUserSection";
import { Link } from "react-router-dom";

const Header = ({getQuery}) => {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <p className="header__logo">
          <Link to="/">MovieCenter</Link>
        </p>
      </div>
      <Search getQuery={getQuery} />

      <HeaderUserSection />
    </header>
  );
};

export default Header;
