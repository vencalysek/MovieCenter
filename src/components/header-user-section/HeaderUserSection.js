import React from "react";
import {auth, signInWithGoogle} from "../../firebase/firebase.config";
import "./headerUserSection.styles.scss";

import {useSelector, useDispatch} from "react-redux";
import {setCurrentUser} from "../../redux/user/user.actions";
import { Link } from "react-router-dom";


const HeaderUserSection = () => {
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    auth.signOut();
    dispatch(setCurrentUser(null))
  };

  const userNameSplit = currentUser && currentUser.displayName.split(" ")

  return (
    <div className="header-user-section">
      
      {currentUser ? (
        <>
          <div className='header__sign-btn' onClick={logout}>Sign Out</div>
          <div className="user-avatar">
            <span>
              {userNameSplit[0][0].toUpperCase()}
              {userNameSplit[userNameSplit.length-1][0].toUpperCase()}
            </span>
          </div>
        </>
      ) : <Link className='header__sign-btn' to='/signin'>Sign In</Link>}
    </div>
  );
};

export default HeaderUserSection;
