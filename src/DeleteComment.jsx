import { useContext, useState } from "react";
import { UserContext } from "./App";
import { deleteComment } from "./api";

function DeleteComment({ author, comment_id, setComments }) {
  const user = useContext(UserContext);

  function handleClick() {
    confirm("Do you really want to delete this comment?");

    if (confirm) {
      setComments((currComments) => {
        return currComments.filter(
          (comment) => comment.comment_id !== comment_id
        );
      });
      deleteComment(comment_id);
      alert('Comment succesfully deleted')
    }
  }

  if (author === user) {
    return (
        <button className="delete-comment" onClick={handleClick}>
          Delete Comment
        </button>
    );
  }
}

export default DeleteComment;
