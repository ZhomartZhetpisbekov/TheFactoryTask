<template>
  <LoadingSpinner v-if="isLoading" />
  <div v-else class="container">
    <div class="bg-image"></div>

    <DetailsHeader
      :image="image"
      :isFavorite="isFavorite"
      @toggle-favorite="toggleFavorite"
    />

    <DetailsBanner :image="image" @show-modal="showModal = true" />

    <ImageModal
      :showModal="showModal"
      :image="image"
      @show-modal="showModal = false"
    />
  </div>
</template>

<script setup>
import LoadingSpinner from "../components/LoadingSpinner.vue";
import DetailsHeader from "../components/DetailsHeader.vue";
import DetailsBanner from "../components/DetailsBanner.vue";
import ImageModal from "../components/ImageModal.vue";
import { useRoute } from "vue-router";
import store from "../store";
import { computed, onMounted, ref } from "vue";

const route = useRoute();
const isLoading = ref(true);
const showModal = ref(false);

onMounted(async () => {
  const id = route.params.id;
  await store.dispatch("fetchImageById", id);
  isLoading.value = false;
});

const image = computed(() => store.state.imageById);

const isFavorite = computed(() => {
  return store.state.favorites.some((image) => image.id === route.params.id);
});

const toggleFavorite = () => {
  if (isFavorite.value) {
    store.commit("removeFromFavorites", image.value.id);
  } else {
    const imageToSave = {
      id: image.value.id,
      urls: {
        small: image.value.urls.small,
      },
    };
    store.commit("addToFavorites", imageToSave);
  }
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  padding: 0 7rem 4rem;
}

.bg-image {
  background-image: url("../assets/bg-details.png");
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 35rem;
  z-index: -999;
  filter: blur(3px) brightness(50%);
}

@media only screen and (max-width: 40rem) {
  .bg-image {
    display: none;
  }

  .container {
    padding: 0 2rem 2rem;
  }
}
</style>
