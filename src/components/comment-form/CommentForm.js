import React, {useState} from "react";
import "./commentForm.styles.scss";

const CommentForm = ({commentsRef}) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(comment);

    await commentsRef.add({
      commentContent: comment,
      createdAt: new Date(),
      id: Math.random(),
      // uid,
    });

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
          <button className="btn btn-lg" disabled={!comment} type="submit">
            Add comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;