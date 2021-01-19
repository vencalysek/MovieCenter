import React from "react";
import CommentForm from "../comment-form/CommentForm";
import './commentSection.styles.scss'

import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "../../firebase/firebase.config";
import CommentList from "../comment-list/CommentList";

const CommentSection = ({movieId}) => {
  const commentsRef = firestore
    .collection("comments")
    .doc(movieId)
    .collection("comments");
  const commentQuery = commentsRef.orderBy("createdAt", "desc");
  const [comments] = useCollectionData(commentQuery);

  return (
    <div className="comment-section">
      <CommentForm commentsRef={commentsRef} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentSection;