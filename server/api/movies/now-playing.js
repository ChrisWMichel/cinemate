export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;

  const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing`;

  const nowPlayingMovies = await $fetch(nowPlayingUrl, {
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
  return { nowPlayingMovies };
});
