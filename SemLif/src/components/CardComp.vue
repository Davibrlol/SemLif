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
  },
};
</script>

<template>
  <div id="card1" class="ml-5 mr-5">
    <div class="absolute z-10 text-white">aaaaaaaaaaa</div>
    <div class="rounded-lg shadow-lg w-64">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img
          class="rounded-t-lg"
          src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
