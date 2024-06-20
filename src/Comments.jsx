import { useEffect, useState } from "react";
import { getComments } from "./api";
import { format } from "date-fns";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComments(data.comments);
    });
  }, []);

  return (
    <div className="comments-container">
      <PostComment article={article_id} setComments={setComments} />
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment">
              <h3>{comment.author}</h3>
              <h4>
                Posted{" "}
                {format(new Date(comment.created_at), "dd MMMM yyyy H:mm")}
              </h4>
              <p>{comment.body}</p>
              <p>Likes: {comment.votes}</p>
              <div className="button-group">
                <button>👍🏻</button>
                <button>👎🏻</button>
              </div>
              <DeleteComment author={comment.author} comment_id={comment.comment_id} setComments={setComments}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Comments;
