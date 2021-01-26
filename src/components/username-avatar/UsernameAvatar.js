import React from "react";
import './usernameAvatar.styles.scss'

const UsernameAvatar = ({username, comment}) => {

  const userNameSplit = username && username.split(" ");

  return (
    <div className={`user-avatar ${comment ? 'blue-background' : null}`}>
      <span>
        {userNameSplit[0][0].toUpperCase()}
        {userNameSplit.length > 1
          ? userNameSplit[userNameSplit.length - 1][0].toUpperCase()
          : null}
      </span>
    </div>
  );
};

export default UsernameAvatar;
