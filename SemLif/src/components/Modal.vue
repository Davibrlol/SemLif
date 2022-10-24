<script>
export default {
  props: {
    content: {},
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w200/${poster_path}`;
    },
  },
};
</script>

<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="modalcontent"
    tabindex="-1"
    aria-labelledby="exampleModalScrollableLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center p-4 border-b border-gray-200 rounded-t-md bg-slate-900"
        >
          <h5
            class="flex justify-center text-xl font-medium leading-normal"
            id="exampleModalScrollableLabel"
          >
            {{ content.name ? content.name : content.title }}
          </h5>
        </div>
        <div class="modal-body relative p-4 bg-slate-900">
          <p class="flex justify-center">
            <img
              class="pr-7 rounded-t-lg"
              :src="getImageUrl(content.poster_path)"
              alt=""
            />
            {{ content.overview }}
          </p>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md bg-slate-900"
        >
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-zinc-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-zinc-900 hover:shadow-lg focus:bg-zinc-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-900 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
