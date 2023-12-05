import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

import { fetchJobsList } from '@/api/index';
import { Jobs } from '@/types';

export const useJobsStore = defineStore('jobs', () => {
  const jobsList: Jobs[] = reactive([]);

  const getJobsList = computed(() => jobsList);

  async function fetchJobs(page: number) {
    try {
      // 첫 호출인 경우 clear
      if (page == 1) {
        jobsList.length = 0;
      }

      const { data } = await fetchJobsList(page);
      for (const jobsInfo of data as Jobs[]) {
        jobsList.push(jobsInfo);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return { jobsList, getJobsList, fetchJobs };
});
