<template>
  <SearchWidget />
  <LoadingSpinner v-if="isLoading" />
  <ImagesGrid v-else :images="images" />
</template>

<script setup>
import LoadingSpinner from "../components/LoadingSpinner.vue";
import SearchWidget from "../components/SearchWidget.vue";
import ImagesGrid from "../components/ImagesGrid.vue";
import store from "../store";
import { computed, onMounted, ref } from "vue";

const isLoading = ref(true);

onMounted(async () => {
  await store.dispatch("fetchRandomImages");
  isLoading.value = false;
});

const images = computed(() => store.state.randomImages.slice(0, 9));
</script>
