<script setup>
import { RouterView } from 'vue-router'
// import NavBar from '@/components/global/NavBar.vue'
// import Foot from '@/components/global/FooterBar.vue'
// import { computed } from 'vue'

// const isAdminPage = computed(() => {
//   const currentHash = window.location.hash;
//   return currentHash.includes('#/admin');
// });
</script>

<template>
  <!-- <div v-if="isAdminPage">
    <RouterView/>
  </div>
  <div v-else class="back_ground">
    <NavBar />
    <RouterView />
    <Foot />
  </div> -->
  <RouterView />
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
body {
  background-color: aquamarine;
  padding: 60px;
}
.back_ground {
  background-color: #1f2833; /* Màu nền */
  display: flex;
  flex-direction: column;
  background-image: url('./assets/images/badminton-icon-shuttlecock-net-badminton-stadium_hvgxvbcp__F0013.png'); /* Thay 'path_to_your_image' bằng đường dẫn đến hình ảnh của bạn */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  background-blend-mode: multiply; /* Đặt độ trong suốt từ 0 (hoàn toàn trong suốt) đến 1 (hoàn toàn không trong suốt) */
}
</style>
