import React from "react";
import {auth, signInWithGoogle} from "../../firebase/firebase.config";
import "./headerUserSection.styles.scss";

import {useSelector, useDispatch} from "react-redux";
import {setCurrentUser} from "../../redux/user/user.actions";
import {Link} from "react-router-dom";
import UsernameAvatar from "../username-avatar/UsernameAvatar";

const HeaderUserSection = () => {
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    auth.signOut();
    dispatch(setCurrentUser(null));
  };

  const userNameSplit = currentUser && currentUser.displayName.split(" ");

  return (
    <div className="header-user-section">
      {currentUser ? (
        <>
          <div className="header__sign-btn" onClick={logout}>
            Sign Out
          </div>
          <UsernameAvatar username={currentUser.displayName} />
        </>
      ) : (
        <Link className="header__sign-btn" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default HeaderUserSection;
