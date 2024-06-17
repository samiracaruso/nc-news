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

export function getArticles() {
    return axios.get("https://be-nc-news-q0tg.onrender.com/api/articles")
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}