const API_KEY = "5927808c5dcf9c9db491fa5372086df8";

// 動画の各カテゴリーを定義する
export const requests = {
  categoryTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  categoryNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  categoryTopRated: `/discover/tv?api_key=${API_KEY}&language=en-us`,
  categoryActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  categoryComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  categoryHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  categoryRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  categoryDocumenttaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
