import { useState } from "react"
import { useEffect } from "react"
import { getArticles } from "./api"
import ArticleCard from "./ArticleCard"

function ArticleList() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
        .then((data) => {
            setArticles(data.articles)
        })
    }, [])

    if (articles.length === 0) return <p>Loading...</p>

    return(
        <>
            <h2>Articles</h2>
            <ul>
                {articles.map((article) => {
                    return <ArticleCard article={article} key={article.article_id} />
                })}
            </ul>
        </>
    )
}

export default ArticleList