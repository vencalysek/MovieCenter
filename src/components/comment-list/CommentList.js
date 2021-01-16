import React from "react";
import CommentForm from "../comment-form/CommentForm";
import Comment from "../comment/Comment";
import "./commentList.styles.scss";

const CommentList = () => {
  const comments = [
    {
      userName: "Vasek",
      createdAt: new Date().toLocaleDateString(),
      commentContent: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
      sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
      turpis.`,
      id: Math.random(),
    },
    {
      userName: "Simek",
      createdAt: new Date().toLocaleDateString(),
      commentContent: `Nulla vel metus scelerisque ante
      sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
      turpis.`,
      id: Math.random(),
    },
    {
      userName: "Simek",
      createdAt: new Date().toLocaleDateString(),
      commentContent: `Nulla vel metus scelerisque ante
      sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
      turpis.Nulla vel metus scelerisque ante
      sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
      turpis.`,
      id: Math.random(),
    },
    {
      userName: "Simek",
      createdAt: new Date().toLocaleDateString(),
      commentContent: `Nulla vel metus scelerisque ante
      sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
      turpis.`,
      id: Math.random(),
    },
  ];

  return (
    <div className="comment-list">
      {comments.length > 0 ? (
        <div className="comments-list__containter">
          <>
            <h2 className='comment-list__heading'>Comments</h2>
            <div className="comment-list__wrapper">
              {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
          </>
        </div>
      ) : null}

      <CommentForm />
    </div>
  );
};

export default CommentList;
