<template>
  <van-nav-bar
    left-arrow
    fixed
    placeholder
    safe-area-inset-top
    title="发表班级圈"
  />
  <van-form>
    <van-field
      ref="formFieldRef"
      v-model="form.content"
      type="textarea"
      maxlength="200"
      :autosize="{ minHeight: 100, maxHeight: 300 }"
      show-word-limit
      placeholder="请输入内容"
    ></van-field>
    <van-field>
      <template #input>
        <van-uploader>
          <div class="uploader van-hairline--surround">
            <van-icon name="photograph" size="20"></van-icon>
            <span>添加照片</span>
          </div>
        </van-uploader>
      </template>
    </van-field>
    <van-cell
      title="选择班级"
      required
      value="全部"
      is-link
      @click="chooseClass"
    ></van-cell>
    <van-cell title="是否置顶">
      <template #value>
        <van-switch v-model="form.isTop"></van-switch>
      </template>
    </van-cell>
    <van-cell
      title="置顶时长"
      value="24小时置顶"
      is-link
      v-show="form.isTop"
    ></van-cell>

    <van-row justify="space-around" class="form-buttons van-safe-area-bottom">
      <van-col span="10">
        <van-button block>取消</van-button>
      </van-col>
      <van-col span="10">
        <van-button block type="primary">确定</van-button>
      </van-col>
    </van-row>
  </van-form>

  <van-action-sheet
    v-model:show="showActionSheet"
    title="选择班级"
    :actions="actions"
    @select="onSelect"
  >
    <template #action="{ action }">
      <van-cell :title="action.name"></van-cell>
      <div>
        <van-cell
          v-for="item in action.class"
          :key="item.id"
          :title="item.name"
        >
          <template #value>
            <van-radio></van-radio>
          </template>
        </van-cell>
      </div>
    </template>
    <van-row justify="space-around" align="center">
      <van-col span="10">
        <van-checkbox>已选2个班级</van-checkbox>
      </van-col>
      <van-col span="6">
        <van-button block>确定</van-button>
      </van-col>
    </van-row>
  </van-action-sheet>
</template>
<script lang="ts" setup>
import { FieldInstance } from "vant";

interface FormData1 {
  content: string;
  files: string[];
  classId: string;
  isTop: false;
}

interface FormData2 {
  content: string;
  files: string[];
  classId: string;
  isTop: true;
  duration: number;
}

type FormData = FormData1 | FormData2;

const form = reactive<FormData>({
  content: "",
  files: [],
  classId: "",
  isTop: false,
});

const formFieldRef = ref<FieldInstance>();

const showActionSheet = ref(false);

const actions = ref<any[]>([]);

const chooseClass = () => {
  actions.value = [
    {
      id: "1",
      name: "幼2023届",
      class: [
        { id: "1-1", name: "幼1班" },
        { id: "1-2", name: "幼2班" },
        { id: "1-3", name: "幼3班" },
      ],
    },
    {
      id: "2",
      name: "幼2024届",
      class: [
        { id: "2-1", name: "幼1班" },
        { id: "2-2", name: "幼2班" },
        { id: "2-3", name: "幼3班" },
      ],
    },
  ];
  showActionSheet.value = true;
};

const onSelect = (item: any) => {
  console.log(item);
};

onMounted(() => {
  if (formFieldRef.value) {
    formFieldRef.value.focus();
  }
});
</script>
<style lang="less" scoped>
.uploader {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  color: #666;
}

.form-buttons {
  position: fixed;
  left: 0;
  bottom: 8px;
  width: 100%;
}
</style>
