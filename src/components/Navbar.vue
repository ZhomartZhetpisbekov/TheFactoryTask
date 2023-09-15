<template>
  <header>
    <router-link class="logo" to="/">
      <img src="../assets/logo.png" />
    </router-link>

    <div class="actions-container">
      <router-link
        v-if="isSecondLayout"
        :to="{ name: 'home' }"
        class="favs-container"
      >
        <img src="../assets/search-white.png" />
        <span>Поиск</span>
      </router-link>
      <router-link :to="{ name: 'favorites' }" class="favs-container">
        <img src="../assets/like.png" />
        <span>Избранное</span>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isSecondLayout = computed(() => route.name !== "home");
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 2rem 7rem;
}

.logo {
  width: 10rem;
}

.logo img {
  width: 100%;
  height: auto;
}

.actions-container {
  display: flex;
  gap: 2rem;
}

.favs-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
}

@media only screen and (max-width: 40rem) {
  header {
    padding: 1rem 2rem;
  }

  .logo {
    width: 7rem;
  }

  .favs-container span {
    display: none;
  }
}
</style>
