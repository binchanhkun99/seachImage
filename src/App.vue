<script setup>
import NavbarComponent from './components/Navar.vue'
import Homeview from './views/Homeview.vue';
import Foooter from './components/Foooter.vue';
</script>

<template>
  <NavbarComponent />
  <!-- <Homeview /> -->
  <RouterView />
  <Foooter />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
