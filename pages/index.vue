<template>
  <div>
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Featured Movies</h2>
      <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <MovieCard v-for="movie in movies" 
        :key="movie.id" 
        :title="movie.title" 
        :id="movie.id" 
        :overview="movie.overview" 
        :release_date="movie.release_date" 
        :poster_path="movie.poster_path" 
        :popularity="movie.popularity" 
        :item="movie"/>
      </div>
    </section>
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Featured Series</h2>
      <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <SeriesCard v-for="serie in series" 
        :key="serie.id" 
        :name="serie.name" 
        :id="serie.id" 
        :overview="serie.overview" 
        :first_air_date="serie.first_air_date" 
        :poster_path="serie.poster_path" 
        :popularity="serie.popularity" 
        :item="serie"/>
      </div>
    </section>
  </div>

</template>

<script setup>
  const movies = ref([])
  const series = ref([])

  const {data} = await useFetch('/api/movies/discover', {
    transform: (data) => {
      movies.value = data.movies
      series.value = data.series
    }
  })
</script>

<style>

</style>