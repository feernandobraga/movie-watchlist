import axios from "axios";

// this creates an instance of axios
// we do this so we can have a base url for the api
const api = axios.create({
  baseURL: "https://movie-database-imdb-alternative.p.rapidapi.com/",
});

export default api;
