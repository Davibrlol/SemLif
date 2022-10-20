<script>
import axios from "axios ";
import CardComp from "../components/CardComp.vue";
import Modal from "../components/Modal.vue";

export default {
  components: { CardComp, Modal },
  data() {
    return {
      generos: [],
      filmesPorGenero: [],
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
        {
          id: 6,
        },
      ],
    };
  },
  async created() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=cdd74c9f441352e6a6aee5e2cc6532e6&language=pt-br"
    );
    for (const genero of data.genres) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=cdd74c9f441352e6a6aee5e2cc6532e6&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genero.id}&with_watch_monetization_types=flatrate`
      );
      this.filmesPorGenero.push({
        id: genero.id,
        name: genero.name,
        movies: data.results,
      });
    }
    console.log(this.filmesPorGenero);
    this.generos = data.genres;
  },
  methods: {
    async getMoviesByGenre(genre) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=cdd74c9f441352e6a6aee5e2cc6532e6&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`
      );
      return data.results;
    },
  },
};
</script>
<template>
  <div class="">
    <div v-for="genero of generos "  :key="genero.id">
      <h1 class="flex justify-center text-white text-4xl pb-7">
        {{ genero.name }}
      </h1>
      <div class="flex justify-center text-white">
        <CardComp
          v-for="movie of filmesPorGenero
            .find((f) => f.id === genero.id)
            .movies.slice(0, 5)"
          :key="movie.id"
          :content="movie"
          data-bs-toggle="modal" 
          :data-bs-target="'#' + movie.title"
        >        
        <Modal :content="movie" />
       </CardComp>
      </div>
    </div>
  </div>
</template>
