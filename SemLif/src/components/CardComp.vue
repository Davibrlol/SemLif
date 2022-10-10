<script>
export default {
  props: {
    filme: {
      type: Object,
    },
    serie: {
      type: Object,
    },
    documentario: {
      type: Object,
    },
  },
  methods: {
    mostrarFilme() {
      alert(this.filme.autor);
    },
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },
  },
};
</script>

<template>
  <div id="card1" class="ml-5 mr-5">
    <div class="absolute z-10 text-white">{{ filme.title }}</div>
    <div class="rounded-lg shadow-lg w-64">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img
          class="rounded-t-lg"
          :src="getImageUrl(filme.poster_path)"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
