<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },
  },
};
</script>

<template>
  <div id="card1" class="ml-5 mr-5">
    <div class="rounded-lg shadow-lg w-64">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img
          class="rounded-t-lg"
          :src="getImageUrl(content.poster_path) "
          alt=""
        />
      </a>
    </div>
    <slot></slot>
  </div>
</template>
