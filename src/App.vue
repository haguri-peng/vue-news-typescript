<script setup lang="ts">
import { useLoadingStore } from '@/stores/loading';
import { storeToRefs } from 'pinia';

import Spinner from '@/components/Spinner.vue';
import ToolBar from '@/components/ToolBar.vue';

const store = useLoadingStore();
const { getLoading } = storeToRefs(store);
</script>

<template>
  <div id="app">
    <Spinner :loading="getLoading"></Spinner>
    <ToolBar></ToolBar>
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: navy;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
/* .page-enter-to, */
.page-leave-to {
  opacity: 0;
}
</style>
