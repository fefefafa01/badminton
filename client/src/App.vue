<script setup>
import NavBar from "./components/global/NavBar.vue";
import Foot from "./components/global/Footer.vue";
// import HomeView from "./Views/HomeView.vue";

</script>

<template >
    <div class="back_ground">
        <NavBar/>
        <router-view />
        <Foot/>
    </div>
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
.back_ground{
    background-color: #1F2833;
    display: flex;
    flex-direction: column;
}
</style>
