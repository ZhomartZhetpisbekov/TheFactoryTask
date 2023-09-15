<template>
  <div class="pagination">
    <a @click="$emit('prev-page')">Previous Page</a>
    <span>{{ currentPage }}</span>
    <a @click="$emit('next-page')">Next Page</a>
  </div>
</template>

<script setup>
defineProps({
  currentPage: Number,
});
</script>

<style scoped>
.pagination {
  margin-top: -2rem;
  padding: 0rem 7rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination a {
  padding: 1rem 1.5rem;
  background-color: gainsboro;
  color: black;
  border-radius: 1rem;
}

.pagination span {
  color: gray;
}

@media only screen and (max-width: 40rem) {
  .pagination {
    margin-top: -1rem;
    padding: 0rem 2rem 2rem;
  }
}
</style>
