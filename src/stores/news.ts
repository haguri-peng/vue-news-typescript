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
      // 보통 OnMounted에서 호출할 때 bFirst 값을 true로 세팅해서 넘겨줘야 데이터가 중복되지 않는다.
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
