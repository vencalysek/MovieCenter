import React from "react";
import "./comment.styles.scss";
import { ReactComponent as Avatar} from '../../assets/avatar.svg'

const Comment = ({comment}) => {
  const {userPhotoURL, commentContent, userName, createdAt} = comment;
  const exactTime = createdAt && createdAt.toDate().toLocaleTimeString().slice(0, -3);
  const createDate = createdAt && createdAt.toDate().toLocaleDateString().split("");
  createDate.splice(-4, 2);


  return (
    <div className="comment__wrapper">
      <div className="media">
        { userPhotoURL ? <img className="comment__user-image mr-3" src={userPhotoURL} alt="avatar" /> : <Avatar className='comment-avatar mr-3' />}
        <div className="media-body">
          <div className="heading d-flex justify-content-between">
            <h3 className="comment-title">{userName}</h3>
            <h4 className="text-muted">
              {exactTime} | {createDate.join("")}
            </h4>
          </div>
          <span className="comment-content">{commentContent}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;