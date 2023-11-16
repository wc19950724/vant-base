<template>
  <Header :data="previousClasses" v-model="selectedClass" />
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="loading"
      v-model:error="error"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </van-pull-refresh>
  <van-floating-bubble
    axis="xy"
    icon="chat"
    magnetic="x"
    @click="jumpPublish"
  />
</template>

<script lang="ts" setup>
import router from "@/router";

import Header from "./components/header.vue";
import { usePullRefresh } from "./hooks";
import { IPreviousClasse } from "./type";

// 历届班级
const previousClasses = reactive<IPreviousClasse[]>([
  {
    name: "幼2022届",
    classes: [
      {
        id: "1",
        name: "幼1班",
      },
      {
        id: "2",
        name: "幼2班",
      },
      {
        id: "3",
        name: "幼3班",
      },
      {
        id: "4",
        name: "幼4班",
      },
    ],
  },
  {
    name: "幼2023届",
    classes: [
      {
        id: "1",
        name: "幼1班",
      },
      {
        id: "2",
        name: "幼2班",
      },
      {
        id: "3",
        name: "幼3班",
      },
      {
        id: "4",
        name: "幼4班",
      },
    ],
  },
  {
    name: "幼2024届",
    classes: [
      {
        id: "1",
        name: "幼1班",
      },
      {
        id: "2",
        name: "幼2班",
      },
      {
        id: "3",
        name: "幼3班",
      },
      {
        id: "4",
        name: "幼4班",
      },
    ],
  },
]);

const selectedClass = ref();

const jumpPublish = () => {
  router.push("/publish");
};

const { list, refreshing, onRefresh, loading, error, finished, onLoad } =
  usePullRefresh();
</script>
