<template>
  <div>
    

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/logo.png"  width="100" height="100" alt="Cinemate Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
        </NuxtLink>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NuxtLink to="/" class="menu-banner" aria-current="page">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/search" class="menu-banner">Search</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/popular" class="menu-banner">Popular</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/now-playing" class="menu-banner">Now Playing</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink to="/top-rated" class="menu-banner">Top Rated</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/up-coming" class="menu-banner">Up Coming</NuxtLink>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>

    <main class="ml-8">
      <slot />
    </main>
    </div>
</template>

<script lang="ts" setup>
//import { onMounted, onUnmounted } from 'vue'

// onMounted(() => {
//   document.body.classList.add('dark')
// })

// onUnmounted(() => {
//   document.body.classList.remove('dark')
// })
</script>

<style scoped>

.menu-banner{
  @apply block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
}

</style>