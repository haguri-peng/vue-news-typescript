import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

import { fetchNewsList } from '@/api/index';
import { News } from '@/types';

export const useNewsStore = defineStore('news', () => {
  const newsList: News[] = reactive([]);

  const getNewsList = computed(() => newsList);

  async function fetchNews(page: number) {
    try {
      // 첫 호출인 경우 clear
      if (page == 1) {
        newsList.length = 0;
      }

      const { data } = await fetchNewsList(page);
      for (const newsInfo of data as News[]) {
        newsList.push(newsInfo);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return { newsList, getNewsList, fetchNews };
});
