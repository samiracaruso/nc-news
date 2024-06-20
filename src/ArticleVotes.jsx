import { useState } from "react";
import { updateArticleVotes } from "./api";

function ArticleVotes({article}) {

  const [votes, setVotes] = useState(article.votes);

  const {article_id} = article

  function handleUpvote() {
    setVotes((prevVotes) => {
      const newVotes = prevVotes + 1;
      updateArticleVotes(article_id, newVotes);
      return newVotes;
    });
  }

  function handleDownvote() {
    setVotes((prevVotes) => {
      const newVotes = prevVotes - 1;
      updateArticleVotes(article_id, newVotes);
      return newVotes;
    });
  }

  return (
    <div>
      <p>Likes: {votes}</p>
      <p>Did you enjoy the article?</p>
      <button onClick={handleUpvote}>👍🏻</button> <button onClick={handleDownvote}>👎🏻</button>
    </div>
  );
}

export default ArticleVotes