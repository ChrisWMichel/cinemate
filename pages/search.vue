<template>
  <div>
    <form class="max-w-md mx-auto">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          v-model="searchTerm"
          disabled
          type="text"
          id="default-search"
          class="searchbar"
          placeholder="Search Movies, Series"
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>

    <section>
      <h2
        v-if="movies.length"
        class="text-2xl font-bold text-gray-900 dark:text-white"
      >
        Movie Results
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :title="movie.title"
          :id="movie.id"
          :overview="movie.overview"
          :release_date="movie.release_date"
          :poster_path="movie.poster_path"
          :popularity="movie.popularity"
          :item="movie"
        />
      </div>
    </section>
    <section>
      <h2
        v-if="series.length"
        class="text-2xl font-bold text-gray-900 dark:text-white"
      >
        Series Results
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <SeriesCard
          v-for="serie in series"
          :key="serie.id"
          :name="serie.name"
          :id="serie.id"
          :overview="serie.overview"
          :first_air_date="serie.first_air_date"
          :poster_path="serie.poster_path"
          :popularity="serie.popularity"
          :item="serie"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const searchTerm = useState("searchTerm", () => "");
const movies = ref([]);
const series = ref([]);

const { data } = await useFetch("/api/movies/search", {
  query: { searchTerm },
  immediate: false,
  transform: (data) => {
    movies.value = data.movies;
    series.value = data.series;
  },
});
//console.log('movies.value', movies.value)
</script>

<style scoped>
.searchbar {
  @apply block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg px-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
</style>
