import axios from 'axios'

export function getTopics() {
    return axios
    .get("https://be-nc-news-q0tg.onrender.com/api/topics")
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export function getArticles(article_topic) {
    return axios.get(`https://be-nc-news-q0tg.onrender.com/api/articles/`, {params: {topic: article_topic}})
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export function getArticleById(article_id) {
    return axios.get(`https://be-nc-news-q0tg.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export function getComments(article_id) {
    return axios
    .get(`https://be-nc-news-q0tg.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export function updateArticleVotes(article_id, votes) {
    return axios.patch(`https://be-nc-news-q0tg.onrender.com/api/articles/${article_id}`, {inc_votes: votes})
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}

export function postComment(article_id, commentData) {
    return axios
    .post(`https://be-nc-news-q0tg.onrender.com/api/articles/${article_id}/comments`, commentData)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}

export function deleteComment(comment_id) {
    return axios
    .delete(`https://be-nc-news-q0tg.onrender.com/api/articles/comments/${comment_id}`)
    .then((reponse) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}