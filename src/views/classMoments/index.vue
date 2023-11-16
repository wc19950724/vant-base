<template>
  <Header :data="previousClasses" v-model="selectedClass" />
  <van-pull-refresh></van-pull-refresh>
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

watch(selectedClass, () => {
  console.log(selectedClass.value);
});
</script>
