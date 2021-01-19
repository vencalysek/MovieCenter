import React from "react";
import Search from "../searchbar/Search";
import "./header.styles.scss";

import HeaderUserSection from "../header-user-section/HeaderUserSection";

const Header = ({getQuery}) => {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <p className="header__logo">
          <a href="/">MovieCenter</a>
        </p>
      </div>
      <Search getQuery={getQuery} />

      <HeaderUserSection />
    </header>
  );
};

export default Header;
