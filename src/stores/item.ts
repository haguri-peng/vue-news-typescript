import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

import { fetchItemInfo } from '@/api/index';
import { Item } from '@/types';

const setValue = <T>(obj: T, key: keyof T, value: T[keyof T]) => {
  obj[key] = value;
};

export const useItemStore = defineStore('item', () => {
  const itemInfo = reactive(<Item>{});

  const getItemInfo = computed(() => itemInfo);

  async function fetchItem(itemId: string) {
    try {
      const { data } = await fetchItemInfo(itemId);
      const itemData = data as Item;

      for (const key of Object.keys(itemData)) {
        const itemKey = key as keyof Item;
        setValue<Item>(itemInfo, itemKey, itemData[itemKey]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function clearItem() {
    const clearData = <Item>{};
    for (const key of Object.keys(itemInfo)) {
      const itemKey = key as keyof Item;
      setValue<Item>(itemInfo, itemKey, clearData[itemKey]);
    }
  }

  return { itemInfo, getItemInfo, fetchItem, clearItem };
});
