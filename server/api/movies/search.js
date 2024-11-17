export default defineEventHandler(async (event) => {
  console.log("event", event);
  const userQuery = getQuery(event);
  const { searchTerm } = userQuery;
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;
  console.log("searchTerm", searchTerm);
  const movieSearch = "https://api.themoviedb.org/3/search/movie";

  const seriesSearch = "https://api.themoviedb.org/3/search/tv";

  const movies = await fetch(
    `${movieSearch}?api_key=${AccessToken}&query=${searchTerm}`
  );
  const series = await fetch(
    `${seriesSearch}?api_key=${AccessToken}&query=${searchTerm}`
  );
  console.log("movie", movies);

  return {
    movies: await movies.json(),
    series: await series.json(),
  };
});
