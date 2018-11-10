import configService from "./config";

const { apiKey } = configService;
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-US&query=venom&page=1&include_adult=false`;

function getMovies() {
  return fetch(URL)
    .then(res => res.json())
    .then(json => json.results);
}
export default getMovies;
