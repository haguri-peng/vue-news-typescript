import { createRouter, createWebHistory } from 'vue-router';

import { useLoadingStore } from '@/stores/loading';
import { useUserStore } from '@/stores/user';

import NewsView from '@/views/NewsView.vue';
import AskView from '@/views/AskView.vue';
import JobsView from '@/views/JobsView.vue';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    name: 'news',
    path: '/news',
    component: NewsView,
  },
  {
    name: 'ask',
    path: '/ask',
    component: AskView,
  },
  {
    name: 'jobs',
    path: '/jobs',
    component: JobsView,
  },
  {
    name: 'user',
    path: '/user/:id',
    component: UserView,
  },
  {
    name: 'item',
    path: '/item',
    component: ItemView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// @ts-ignore
// Navigation guards
router.beforeEach((to, from, next) => {
  const loadingStore = useLoadingStore();
  const { showLoading } = loadingStore;

  const userStore = useUserStore();
  const { clearUser } = userStore;

  // user로 이동할 때 먼저 User 정보를 초기화
  if (to.name == 'user') {
    clearUser();
  }

  showLoading();
  next();
});

export default router;
