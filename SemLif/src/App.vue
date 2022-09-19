<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBarVue from "./components/NavBar.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen bg-zinc-900">
    <NavBarVue />
    <main class="block">
      <RouterView />
    </main>
    <FooterVue />
  </div>
</template>
