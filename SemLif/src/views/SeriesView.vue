<script>
import CardComp from "../components/CardComp.vue";
import Modal from "../components/Modal.vue";
import axios from "axios";

export default {
  components: { CardComp, Modal },
  data() {
    return {
      generos: [],
      SeriesPorGenero: [],
      currentSerie: {},
      series: [
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
      "https://api.themoviedb.org/3/genre/tv/list?api_key=cdd74c9f441352e6a6aee5e2cc6532e6&language=pt-BR"
    );
    for (const genero of data.genres) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=cdd74c9f441352e6a6aee5e2cc6532e6&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genero.id}&with_watch_monetization_types=flatrate`
      );
      this.SeriesPorGenero.push({
        id: genero.id,
        name: genero.name,
        series: data.results,
      });
    }
    console.log(this.SeriesPorGenero);
    this.generos = data.genres;
  },
  methods: {
    async getMoviesByGenre(genre) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=cdd74c9f441352e6a6aee5e2cc6532e6&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`
      );
      return data.results;
    },
    changeSerie(series) {
      Object.assign(this.currentSerie, series)
    }
  },
};
</script>
<template>
  <div class="">
    <div v-for="genero of SeriesPorGenero" :key="genero.id">
      <h1 class="flex justify-center text-white text-4xl pb-7">
        {{ genero.name }}
      </h1>
      <div class="flex justify-center text-white">
        <CardComp
          v-for="serie of genero.series.slice(0, 5)"
          :key="serie.id"
          :content="serie"
          @click="changeSerie(serie)"
          data-bs-toggle="modal"
          data-bs-target="#modalcontent"
        />
        <Modal :content="currentSerie" />
      </div>
    </div>
  </div>
</template>
