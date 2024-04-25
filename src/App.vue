<template>
  <NavbarComponent :status="status" />
  <div @click="toggleStatus">
    <RouterView   />
  <Foooter  />
  </div>

</template>

<script setup>
import NavbarComponent from './components/Navar.vue'
import Foooter from './components/Foooter.vue';
import { ref } from 'vue'

const status = ref(false);

const toggleStatus = () => {
  status.value = !status.value; // Chuyển đổi giá trị từ false sang true và ngược lại
}
</script>


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
