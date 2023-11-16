<template>
  <van-nav-bar left-arrow fixed placeholder safe-area-inset-top>
    <template #title>
      <van-dropdown-menu ref="classMenu">
        <van-dropdown-item :title="modelValue?.name || '全部班级圈'">
          <template v-for="item in data" :key="item.name">
            <div>{{ item.name }}</div>
            <van-grid clickable>
              <van-grid-item
                v-for="cls in item.classes"
                :key="cls.id"
                :text="cls.name"
                @click="() => selectClassHandler(cls)"
              />
            </van-grid>
          </template>
        </van-dropdown-item>
      </van-dropdown-menu>
    </template>
  </van-nav-bar>
</template>

<script lang="ts" setup>
import { DropdownMenuInstance } from "vant";

import { IClass, IPreviousClasse } from "../type";

defineProps<{
  data: IPreviousClasse[];
  modelValue?: IClass;
}>();

const emits = defineEmits(["update:modelValue", "change"]);

const classMenu = ref<DropdownMenuInstance>();

const selectClassHandler = (cls: IClass) => {
  emits("update:modelValue", cls);
  emits("change", cls);
  classMenu.value?.close();
};
</script>
