<template>
  <div v-if="showModal" class="modal">
    <div class="modal-background" @click="$emit('show-modal')"></div>
    <div class="modal-content">
      <img :src="image.urls.regular" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  showModal: Boolean,
  image: Object,
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
