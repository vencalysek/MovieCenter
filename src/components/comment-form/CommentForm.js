import React, {useState} from "react";
import { useSelector } from "react-redux";
import "./commentForm.styles.scss";

const CommentForm = ({commentsRef}) => {
  const [comment, setComment] = useState("");
  const [commentID, setCommentID] = useState('')

  const {currentUser} = useSelector(state => state.user)

  const randomID = () => {
    setCommentID(`${Math.random()}`)
    console.log()
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (currentUser) {
      
      await commentsRef.doc(commentID).set({
        commentContent: comment,
        createdAt: new Date(),
        id: commentID,
        userID: currentUser.uid,
        userName: currentUser.displayName,
        userPhotoURL: currentUser.photoURL
      });
    } else {
      await commentsRef.doc(commentID).set({
        commentContent: comment,
        createdAt: new Date(),
        id: commentID,
        userID: null,
        userName: 'Unregistered user',
      });
    }
    

    setComment("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        {" "}
        <div className="form-group">
          <label for="comment-message">Write whats on your mind...</label>
        </div>
        <div className="form-group">
          <textarea
            id="comment-message"
            className="form-control-lg mb-2"
            rows="3"
            placeholder="Write your comment..."
            value={comment}
            onChange={e => setComment(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-lg" disabled={!comment} type="submit" onClick={randomID} >
            Add comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;