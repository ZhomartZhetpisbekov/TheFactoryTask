<template>
  <SearchWidget />
  <LoadingSpinner v-if="isLoading" />
  <div v-else>
    <ImagesGrid :images="searchResults.results.slice(0, 9)" />
    <Pagination
      @prev-page="prevPage"
      @next-page="nextPage"
      :currentPage="currentPage"
    />
  </div>
</template>

<script setup>
import SearchWidget from "../components/SearchWidget.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import ImagesGrid from "../components/ImagesGrid.vue";
import Pagination from "../components/Pagination.vue";
import store from "../store";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";

const isLoading = ref(true);
const route = useRoute();
const router = useRouter();
const searchResults = computed(() => store.state.searchResults);

const currentPage = ref(Number(route.params.page) || 1);

const fetchData = async () => {
  const query = route.params.query;
  await store.dispatch("fetchSearchResults", {
    query,
    page: currentPage.value,
  });
  isLoading.value = false;
};

onMounted(fetchData);

const nextPage = () => {
  currentPage.value++;
  router.push({
    path: `/search/${route.params.query}/page/${currentPage.value}`,
  });
  fetchData();
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    router.push({
      path: `/search/${route.params.query}/page/${currentPage.value}`,
    });
    fetchData();
  }
};
</script>

<style scoped></style>
