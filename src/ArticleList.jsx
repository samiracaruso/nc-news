import { useState } from "react"
import { useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getArticles } from "./api"
import ArticleCard from "./ArticleCard"

function ArticleList() {

    const [articles, setArticles] = useState([])
    const { topic } = useParams();

    useEffect(() => {
        getArticles(topic)
        .then((data) => {
            setArticles(data.articles)
        })
    }, [topic])

    if (articles.length === 0) return <p>Loading...</p>

    return(
        <>
            <h2>Articles {topic ? `about ${topic}` : ''}</h2>
            <ul>
                {articles.map((article) => {
                    return <ArticleCard article={article} key={article.article_id} />
                })}
            </ul>
        </>
    )
}

export default ArticleList