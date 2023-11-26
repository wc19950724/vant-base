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
    <van-cell title="选择班级" required value="全部"></van-cell>
  </van-form>
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
</style>
