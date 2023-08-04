const API_KEY = "48752be452ce02711e96d8e8a284b7c9";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchnetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchToprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchdocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
