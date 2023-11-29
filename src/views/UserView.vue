<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import { useUserStore } from '@/stores/user';
import { useLoadingStore } from '@/stores/loading';
import { storeToRefs } from 'pinia';

import UserProfile from '@/components/UserProfile.vue';

const route = useRoute();

const userStore = useUserStore();
const { getUserInfo } = storeToRefs(userStore);
const { fetchUser, clearUser } = userStore;

const loadingStore = useLoadingStore();
const { hideLoading } = loadingStore;

const addComma = (num: string | number) => {
  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  return (num + '').replace(regExp, ',');
};

onMounted(() => {
  const id = route.params.id as string;
  fetchUser(id).then(hideLoading);
});
onUnmounted(() => {
  clearUser();
});
</script>

<template>
  <div>
    <UserProfile>
      <template #username>
        <div>User Name: {{ getUserInfo.id }}</div>
      </template>
      <template #time>
        <span>{{ 'Joined ' + getUserInfo.created }}</span>
      </template>
      <template #karma>
        <span style="margin-left: 10px">
          (Karma: {{ addComma(getUserInfo.karma) }})
        </span>
      </template>
    </UserProfile>
  </div>
</template>

<style scoped></style>
