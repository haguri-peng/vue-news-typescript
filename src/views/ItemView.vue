<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useItemStore } from '@/stores/item';
import { useUserStore } from '@/stores/user';
import { useLoadingStore } from '@/stores/loading';
import { storeToRefs } from 'pinia';

import UserProfile from '@/components/UserProfile.vue';

const route = useRoute();

const itemStore = useItemStore();
const { getItemInfo } = storeToRefs(itemStore);
const { fetchItem } = itemStore;

const userStore = useUserStore();
const { getUserInfo } = storeToRefs(userStore);
const { fetchUser } = userStore;

const loadingStore = useLoadingStore();
const { hideLoading } = loadingStore;

const addComma = (num: string | number) => {
  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  return (num + '').replace(regExp, ',');
};

onMounted(() => {
  const itemId = route.query.id as string;
  fetchItem(itemId).then(() => {
    fetchUser(getItemInfo.value.user).then(hideLoading);
  });
});
</script>

<template>
  <div style="max-width: 800px">
    <section>
      <!-- 사용자 정보 -->
      <UserProfile>
        <template #username>
          <div>
            User Name:
            <router-link v-bind:to="`/user/${getUserInfo.id}`">
              {{ getUserInfo.id }}
            </router-link>
          </div>
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
    </section>

    <!-- 제목 -->
    <section style="text-align: left; padding-left: 10px">
      <h2>△ {{ getItemInfo.title }}</h2>
    </section>

    <section style="text-align: left; padding-left: 20px">
      <!-- 질문 상세 정보 -->
      <div v-html="getItemInfo.content"></div>
    </section>
  </div>
</template>

<style scoped></style>
