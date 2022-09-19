<script>
import CardComp from "../components/CardComp.vue";

export default {
  components: { CardComp },
  data() {
    return {
      movies: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    };
  },
};
</script>
<template>
  <div class="">
    <h1 class="flex justify-center text-white">Ação</h1>
    <div class="flex justify-center text-white">
      <CardComp v-for="movie of movies" :key="movie.id" :filme="movie" />
    </div>
    <h1 class="flex justify-center text-white">Aventura</h1>
    <div class="flex justify-center text-white">
      <CardComp v-for="movie of movies" :key="movie.id" :filme="movie" />
    </div>
  </div>
</template>
