import React from "react";
import Search from "../searchbar/Search";
import "./header.styles.scss";
import {auth, signInWithGoogle} from '../../firebase/firebase.config'


const Header = ({getQuery}) => {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <p className="header__logo">
          <a href="/">MovieCenter</a>
        </p>
      </div>
      <Search getQuery={getQuery} />

      <div className="user">User
       <button onClick={signInWithGoogle}>SignIN</button>
      </div>

    </header>
  );
};

export default Header;
