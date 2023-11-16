export const usePullRefresh = () => {
  const list = ref<number[]>([]);
  const refreshing = ref(false);
  const loading = ref(false);
  const error = ref(false);
  const finished = ref(false);
  const onRefresh = () => {
    refreshing.value = true;
    loading.value = true;
    error.value = false;
    finished.value = false;
    onLoad();
  };
  const onLoad = () => {
    setTimeout(() => {
      if (refreshing.value) {
        list.value = [];
        refreshing.value = false;
      }

      for (let i = 0; i < 10; i++) {
        list.value.push(list.value.length + 1);
      }
      loading.value = false;

      if (list.value.length >= 40) {
        finished.value = true;
      }
    }, 1000);
  };
  return {
    list,
    refreshing,
    loading,
    error,
    finished,
    onRefresh,
    onLoad,
  };
};
