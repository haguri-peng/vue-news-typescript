<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const appHeader = ref();
const navHeight = ref(0);
const isFixed = ref(false);

const checkHeight = () => {
  isFixed.value = window.scrollY > navHeight.value ? true : false;
};

onMounted(() => {
  const divHeader = appHeader.value as HTMLDivElement;
  navHeight.value = divHeader.offsetHeight;

  // scroll event
  window.addEventListener('scroll', checkHeight);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkHeight);
});
</script>

<template>
  <div class="header" :class="{ fixed: isFixed }" ref="appHeader">
    <img src="../assets/vue.svg" alt="logo" class="logo" />
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  padding: 8px 8px 8px 25px;
  display: flex;
  align-items: stretch;
}
.header a.router-link-active {
  color: whitesmoke;
}
.header a {
  color: darkcyan;
}
.header a:active {
  color: #35495e;
}
.fixed {
  position: sticky;
  top: 0;
  z-index: 999;
}
.logo {
  width: 30px;
  margin-right: 18px;
}
a {
  margin: 0 5px;
}
</style>
