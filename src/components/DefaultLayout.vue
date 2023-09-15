<template>
  <div>
    <Navbar />
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
