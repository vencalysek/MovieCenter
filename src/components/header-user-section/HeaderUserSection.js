import React from "react";
import {auth, signInWithGoogle} from "../../firebase/firebase.config";
import "./headerUserSection.styles.scss";

import {useSelector, useDispatch} from "react-redux";
import {setCurrentUser} from "../../redux/user/user.actions";


const HeaderUserSection = () => {
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    auth.signOut();
    dispatch(setCurrentUser(null))
  };

  return (
    <div className="header-user-section">
      
      {currentUser ? (
        <>
          <div className='sign-btn' onClick={logout}>Sign Out</div>
          <div className="user-avatar">
            <span>
              {currentUser.displayName.split(" ")[0][0].toUpperCase()}
              {currentUser.displayName.split(" ")[1][0].toUpperCase()}
            </span>
          </div>
        </>
      ) : <div className='sign-btn' onClick={signInWithGoogle}>Sign In</div>}
    </div>
  );
};

export default HeaderUserSection;
