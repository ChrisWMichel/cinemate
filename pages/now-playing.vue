<template>
  <div>
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Now Playing Movies</h2>
      <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <MovieCard v-for="movie in movies" 
        :key="movie.id" 
        :title="movie.title" 
        :id="movie.id" 
        :overview="movie.overview" 
        :release_date="movie.release_date" 
        :poster_path="movie.poster_path" 
        :popularity="movie.popularity" 
        :item="movie" />
      </div>
    </section>
    
  </div>
</template>

<script setup>

  const movies = ref([])
  
  const {data} = await useFetch('/api/movies/now-playing', {
    transform: (data) => {
      movies.value = data.nowPlayingMovies.results
    }
  })

</script>

<style>

</style>