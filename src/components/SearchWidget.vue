<template>
  <div class="container">
    <div class="search-container">
      <input
        v-model="localQuery"
        @keyup.enter="search"
        type="text"
        placeholder="Поиск"
      />
      <button @click="search">
        <img src="../assets/search-icon.png" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const localQuery = ref(route.params.query || "");

function search() {
  router.push({
    name: "search",
    params: { query: localQuery.value, page: "1" },
  });
}
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  padding: 5rem 2rem;
  justify-content: center;
  background-image: url("../assets/background.png");
  background-size: cover;
}

.search-container {
  width: 50%;
  position: relative;
}

.search-container input {
  width: 100%;
  padding: 1rem;
  padding-right: 2.75rem;
  font-size: 1rem;
  outline: none;
}

.search-container input::placeholder {
  font-size: 1rem;
}

.search-container button {
  border: none;
  background: none;
  position: absolute;
  right: 0;
  padding: 0.8rem;
  cursor: pointer;
}

@media only screen and (max-width: 40rem) {
  .search-container {
    width: 100%;
  }
}
</style>
