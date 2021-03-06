import React from "react";
import Comment from "../comment/Comment";
import "./commentList.styles.scss";


const CommentList = ({comments, commentsRef}) => {

  return (
    <div className="comment-list">
        {comments && comments.length > 0 ? (
          <>
            <h2 className="comment-list__heading">Comments</h2>
            {comments.map(comment => (
              <Comment key={comment.id} comment={comment} commentsRef={commentsRef} />
            ))}
          </>
        ) : (
          <p className='comment-list__missing' >No comments yet...</p>
        )}
      </div>
  );
};

export default CommentList;
