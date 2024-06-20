import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "./api";
import { format } from "date-fns";
import Comments from "./Comments";
import ArticleVotes from "./ArticleVotes";

function ArticlePage() {

  const { article_id } = useParams();
 
  const [article, setArticle] = useState('');

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data.article);
    });
  }, []);

  if(!article) return <p>Loading...</p>

  return (
    <section>
      <div className="article-container">
      <h2>{article.title}</h2>
      <div className="meta-info">
      <h3>Author: {article.author}</h3>
      <h4>{format(new Date(article.created_at), "dd MMMM yyyy H:mm")}</h4>
      <h4>Category: {article.topic.slice(0,1).toUpperCase() + article.topic.slice(1)}</h4>
      </div>
      <ArticleVotes article={article}/>
      <img className="article-img" src={article.article_img_url}/>
      <p className="article-body">{article.body}</p>
      </div>
      <Comments article_id={article_id}/>
    </section>
  );
}

export default ArticlePage
