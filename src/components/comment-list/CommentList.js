import React from "react";
import CommentForm from "../comment-form/CommentForm";
import Comment from "../comment/Comment";
import "./commentList.styles.scss";

import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "../../firebase/firebase.config";

const CommentList = ({movieId}) => {
  const commentsRef = firestore
    .collection("comments")
    .doc(movieId)
    .collection("comments");
  const commentQuery = commentsRef.orderBy("createdAt", "desc");
  const [comments] = useCollectionData(commentQuery);

  return (
    <div className="comment-list">
      <CommentForm commentsRef={commentsRef} />
      <div className="comment-list__wrapper m-3">
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
    </div>
  );
};

export default CommentList;
