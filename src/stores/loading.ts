import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false);

  const getLoading = computed(() => loading.value);

  function toggleLoading() {
    loading.value = !loading.value;
  }

  function showLoading() {
    loading.value = true;
  }

  function hideLoading() {
    loading.value = false;
  }

  return { loading, getLoading, toggleLoading, showLoading, hideLoading };
});
