<script>
    import CardComp from "../components/CardComp.vue";
    
    export default {
      components: { CardComp },
      data() {
        return {
          documentaries: [
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
        <h1 class="flex justify-center text-white text-4xl pb-7 ">Em Alta</h1>
        <div class="flex justify-center text-white">
          <CardComp v-for="documentary of documentaries" :key="documentary.id" :documentario="documentary" />
        </div>
        <h1 class="flex justify-center text-white text-4xl p-10">Biográficos</h1>
        <div class="flex justify-center text-white">
          <CardComp v-for="documentary of documentaries" :key="documentary.id" :documentario="documentary" />
        </div>
        <h1 class="flex justify-center text-white text-4xl p-10">Crimes</h1>
        <div class="flex justify-center text-white">
          <CardComp v-for="documentary of documentaries" :key="documentary.id" :documentario="documentary" />
        </div>
        <h1 class="flex justify-center text-white text-4xl p-10">Terror </h1>
        <div class="flex justify-center text-white">
          <CardComp v-for="documentary of documentaries" :key="documentary.id" :documentario="documentary" />
        </div>
      </div>
    </template>
    