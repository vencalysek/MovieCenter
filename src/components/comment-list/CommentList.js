import React from "react";
import Comment from "../comment/Comment";
import "./commentList.styles.scss";


const CommentList = ({comments}) => {

  return (
    <div className="comment-list">
        {comments && comments.length > 0 ? (
          <>
            <h2 className="comment-list__heading">Comments</h2>
            {comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </>
        ) : (
          <p>No comments yet...</p>
        )}
      </div>
  );
};

export default CommentList;
