import movipsService from "./movips";

const moviesService = {};

moviesService.search = function(q) {
  const language = String;
  const page = String;
  return moviesService
    .get("/search", { params: { q, language, page } })
    .then(res => res.data);
};
export default moviesService;
