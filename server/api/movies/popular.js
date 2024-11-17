export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;

  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular`;
  const popularSeriesUrl = `https://api.themoviedb.org/3/tv/popular`;

  const popularMovies = await $fetch(popularMoviesUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application",
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      language: "en-US",
      page: 1,
    },
  });

  const popularSeries = await $fetch(popularSeriesUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application",
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      language: "en-US",
      page: 1,
    },
  });

  return {
    movies: popularMovies.results,
    series: popularSeries.results,
  };
});
