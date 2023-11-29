import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

import { fetchUserInfo } from '@/api/index';
import { User } from '@/types';

// const getKeyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];
// getKeyValue<CovidWeekStat, keyof CovidWeekStat>(result, key_day)
const setValue = <T>(obj: T, key: keyof T, value: T[keyof T]) => {
  obj[key] = value;
};

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive(<User>{});

  const getUserInfo = computed(() => userInfo);

  async function fetchUser(userName: string) {
    try {
      const { data } = await fetchUserInfo(userName);
      const userData = data as User;

      for (const key of Object.keys(userData)) {
        const userKey = key as keyof User;
        setValue<User>(userInfo, userKey, userData[userKey]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function clearUser() {
    const clearData = <User>{};
    for (const key of Object.keys(userInfo)) {
      const userKey = key as keyof User;
      setValue<User>(userInfo, userKey, clearData[userKey]);
    }
  }

  return { userInfo, getUserInfo, fetchUser, clearUser };
});
