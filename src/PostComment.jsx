import { useState, useContext } from "react";
import { UserContext } from "./App";
import { postComment } from "./api";

function PostComment({ article, setComments }) {
  const [commentBody, setCommentBody] = useState("");

  const user = useContext(UserContext);

  function handleChange(event) {
    setCommentBody(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    const commentData = {
      body: commentBody,
      username: user,
    };

    const newDate = new Date().toISOString();

    const newComment = {
      comment_id: Math.floor(1000 + Math.random() * 9000), 
      body: commentBody,
      author: user,
      votes: 0,
      created_at: new Date().toISOString(),
    };

    setComments((currComments) => [newComment, ...currComments]);
    postComment(article, commentData);
  }

  return (
    <form>
      <h3>Post a Comment:</h3>
      <p className="logged-in">Logged in as @{user}</p>
      <textarea
        onChange={handleChange}
        className="responsive-textarea"
        placeholder="Type your comment..."
      />
      <button onClick={handleClick} className="post-comment">
        Post
      </button>
    </form>
  );
}

export default PostComment;
