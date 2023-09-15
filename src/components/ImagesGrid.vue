<template>
  <div class="grid-container">
    <router-link
      class="image-container"
      v-for="image in images"
      :key="image.id"
      :to="{ name: 'imageDetails', params: { id: image.id } }"
    >
      <div class="image">
        <img :src="image.urls.small" />
      </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  images: Array,
});
</script>

<style scoped>
.grid-container {
  width: 100%;
  padding: 4rem 7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.image-container {
  max-width: 100%;
  overflow: hidden;
  display: block;
  border-radius: 1rem;
}

.image {
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
}

.image img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
}

@media only screen and (max-width: 65rem) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
}

@media only screen and (max-width: 40rem) {
  .grid-container {
    padding: 2rem 2rem;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
}
</style>
