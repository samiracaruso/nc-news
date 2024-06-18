import { useEffect, useState } from "react";
import { getComments } from "./api";
import { format } from "date-fns";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComments(data.comments);
    });
  }, [comments]);

  return (
    <div className="comments-container">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment">
              <h3>{comment.author}</h3>
              <h4>
                {format(new Date(comment.created_at), "dd MMMM yyyy H:mm")}
              </h4>
              <p>{comment.body}</p>
              <p>Likes: {comment.votes}</p>
              <button>👍🏻</button> <button>👎🏻</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Comments;
