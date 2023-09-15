<template>
  <h1>Избранное</h1>
  <ImagesGrid :images="favs" />
</template>

<script setup>
import { computed } from "vue";
import ImagesGrid from "../components/ImagesGrid.vue";
import store from "../store";

const favs = computed(() => store.state.favorites);
</script>

<style scoped>
h1 {
  margin-top: 3rem;
  text-align: center;
}
</style>
