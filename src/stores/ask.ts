import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

import { fetchAskList } from '@/api/index';
import { Ask } from '@/types';

export const useAskStore = defineStore('ask', () => {
  const askList: Ask[] = reactive([]);

  const getAskList = computed(() => askList);

  async function fetchAsk(page: number) {
    try {
      // 첫 호출인 경우 clear
      if (page == 1) {
        askList.length = 0;
      }

      const { data } = await fetchAskList(page);
      for (const askInfo of data as Ask[]) {
        askList.push(askInfo);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return { askList, getAskList, fetchAsk };
});
