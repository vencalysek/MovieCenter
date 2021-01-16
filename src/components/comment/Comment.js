import React from "react";
import './comment.styles.scss'

const Comment = ({comment}) => {
  return (
    <div className="comment__wrapper">
      <div className="media">
        <img
          className="mr-3"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-ZGtKB14PEvXgKIsjVxzH3P8QCno23eSiyjWHa=s83-c-mo"
          alt="Generic placeholder image"
        />
        <div className="media-body">
          <div className="heading d-flex justify-content-between">
            <h3 className="comment-title">
              <strong>{comment.userName}</strong>
            </h3>
            <h4 className="text-muted">{comment.createdAt}</h4>
          </div>
          <p className='comment-content' >
            {comment.commentContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
