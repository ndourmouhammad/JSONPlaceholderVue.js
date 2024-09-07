import axios from 'axios'

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export default {
    getArticles() {
        return axios.get(apiUrl)
    },

    getArticle(id) {   
        return axios.get(`${apiUrl}/${id}`)
    },

    createArticle(article) {
        return axios.post(apiUrl, article)
    },

    updateArticle(id, article) {
        return axios.put(`${apiUrl}/${id}`, article)
    },

    deleteArticle(id) {
        return axios.delete(`${apiUrl}/${id}`)
    }
}