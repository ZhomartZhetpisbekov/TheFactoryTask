<template>
  <div class="image-container">
    <img class="photo" :src="image.urls.regular" :alt="image.alt_description" />
    <img
      @click="$emit('show-modal')"
      class="maximize-icon"
      src="../assets/maximize.png"
    />
  </div>
</template>

<script setup>
defineProps({
  image: Object,
});
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 35rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 10px 8px 30px 10px rgba(0, 0, 0, 0.2),
    10px 12px 40px 14px rgba(0, 0, 0, 0.19);
}

.image-container .photo {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
}

.maximize-icon {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  cursor: pointer;
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
  .image-container {
    height: 20rem;
  }

  .maximize-icon {
    display: none;
  }
}
</style>
