<template>
  <div class="header-container">
    <div class="user-info-container">
      <img :src="image.user.profile_image.large" alt="" />
      <div class="user-refs">
        <p>{{ image.user.first_name + " " + image.user.last_name }}</p>
        <span>@{{ image.user.username }}</span>
      </div>
    </div>
    <div class="actions-container">
      <a
        @click="$emit('toggle-favorite')"
        :class="`like-btn ${isFavorite ? 'black-bg' : 'white-bg'}`"
      >
        <img
          v-if="isFavorite"
          src="../assets/like.png"
          :alt="image.alt_description"
        />
        <img
          v-else
          src="../assets/black-like.png"
          :alt="image.alt_description"
        />
      </a>
      <a :href="image.links.download" target="_blank" class="download-btn">
        <img src="../assets/download-icon.png" alt="Download Icon" />
        <span>Download</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: Object,
  isFavorite: Boolean,
});
</script>

<style scoped>
.header-container {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f2f2f2;
}

.user-info-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-info-container img {
  width: 4rem;
  height: 4rem;
  border: 1px solid gainsboro;
  border-radius: 0.5rem;
}

.user-info-container p {
  font-size: 1.5rem;
}

.actions-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.like-btn {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.5rem;
}

.black-bg {
  background-color: black;
}

.white-bg {
  background-color: white;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background-color: #fff200;
  border-radius: 0.5rem;
  color: black;
}

@media only screen and (max-width: 40rem) {
  .user-refs p {
    color: black;
  }

  .user-refs span {
    color: gainsboro;
  }

  .like-btn {
    border: 1px solid gainsboro;
  }

  .download-btn {
    padding: 0.75rem;
    border: 1px solid gainsboro;
  }

  .download-btn span {
    display: none;
  }
}
</style>
