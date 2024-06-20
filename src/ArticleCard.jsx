import { format } from "date-fns";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {

 
  return (
    <Link to={`/articles/${article.article_id}`} className="article-card">
      <li >
        <h3>{article.title}</h3>
        <h4>Author: {article.author}</h4>
        <h5>{format(new Date(article.created_at), "dd MMMM yyyy H:mm")}</h5>
        <h5>Category: {article.topic}</h5>
        <img src={article.article_img_url} />
        <h5>Comments: {article.comment_count}</h5>
        <h5>Likes: {article.votes}</h5>
      </li>
    </Link>
  );
}

export default ArticleCard;
