import React, {useState} from "react";
import "./commentForm.styles.scss";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="form-group m-3 ml-5">
        {" "}
        <div className="form-group">
          <label for="comment-message">Write whats on your mind...</label>
        </div>
        <div className="form-group">
          <textarea
            id="comment-message"
            className="form-control-lg mb-2"
            rows="3"
            cols="80"
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

{
  /* <form method="post" onSubmit={handleSubmit}>
        <label>Write whats on your mind...</label>
        <textarea
          className="mb-2"
          rows="3"
          cols="45"
          placeholder="Write your comment..."
          value={comment}
          onChange={e => setComment(e.target.value)}
        />

        <button disabled={!comment} type="submit">
          Add comment
        </button>
      </form> */
}
