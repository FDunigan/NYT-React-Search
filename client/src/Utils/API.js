import axios from "axios"; 
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const API = "8124c54a610c4450a7bbeb0a4ed2f9b8";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
