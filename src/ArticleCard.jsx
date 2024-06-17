import {format} from 'date-fns'

function ArticleCard({article}) {
    return (
    <li>
        <h3>{article.title}</h3>
        <h4>Author: {article.author}</h4>
        <h5>{format(new Date(article.created_at), 'dd MMMM yyyy H:mm')}</h5>
        <h5>Category: {article.topic}</h5>
        <img src={article.article_img_url} />
        <h5>Comments: {article.comment_count}</h5>
        <h5>Votes: {article.votes}</h5>
    </li>
    )
}

export default ArticleCard