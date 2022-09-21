<script>
    import CardComp from "../components/CardComp.vue";
    
    export default {
      components: { CardComp },
      data() {
        return {
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
            }
          ],
        };
      },
    };
    </script>
    <template>
      <div class="">
        <h1 class="flex justify-center text-white text-4xl pb-7 ">Ação</h1>
        <div class="flex justify-center text-white">
          <CardComp v-for="serie of series" :key="serie.id" :serie="serie" />
        </div>
        <h1 class="flex justify-center text-white text-4xl p-10">Aventura</h1>
        <div class="flex justify-center text-white">
          <CardComp v-for="serie of series" :key="serie.id" :serie="serie" />
        </div>
        <h1 class="flex justify-center text-white text-4xl p-10">Romance</h1>
        <div class="flex justify-center text-white">
          <CardComp v-for="serie of series" :key="serie.id" :serie="serie" />
        </div>
        <h1 class="flex justify-center text-white text-4xl p-10">Terror </h1>
        <div class="flex justify-center text-white">
          <CardComp v-for="serie of series" :key="serie.id" :serie="serie" />
        </div>
      </div>
    </template>
    