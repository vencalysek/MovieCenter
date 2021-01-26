import React from "react";
import {useSelector} from "react-redux";
import {ReactComponent as Avatar} from "../../assets/avatar.svg";
import UsernameAvatar from "../username-avatar/UsernameAvatar";
import "./comment.styles.scss";

const Comment = ({comment, commentsRef}) => {
  const {userPhotoURL, commentContent, userName, createdAt, id, userID} = comment;
  const {currentUser} = useSelector(state => state.user);

  const exactTime = createdAt && createdAt.toDate().toLocaleTimeString().slice(0, -3);
  const createDate = createdAt && createdAt.toDate().toLocaleDateString().split("");
  createDate.splice(-4, 2);

  // const commentRef = comment && commentsRef.doc(comment.id)

  return (
    <div className="comment__wrapper">
      <div className="media">
        {userPhotoURL ? (
          <img className="comment__user-image mr-3" src={userPhotoURL} alt="avatar" />
        ) : userID ? (
          <UsernameAvatar comment username={userName} />
        ) : (
          <Avatar className="comment-avatar mr-3" />
        )}
        <div className="media-body">
          <div className="heading d-flex justify-content-between">
            <h3 className="comment-title">{userName}</h3>
            <div className="comment__left-side">
              <h4 className="text-muted">
                {exactTime} | {createDate.join("")}
              </h4>
              {currentUser && currentUser.uid == userID ? (
                <span
                  className="comment__delete-btn material-icons"
                  onClick={() => commentsRef.doc(id).delete()}>
                  clear
                </span>
              ) : null}
            </div>
          </div>
          <span className="comment-content">{commentContent}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
