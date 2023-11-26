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
      <div
        v-for="item in list"
        :key="item"
        class="list-item van-hairline--bottom"
      >
        <van-image
          round
          fit="cover"
          width="2.5rem"
          height="2.5rem"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        ></van-image>
        <div class="list-item-right">
          <div class="list-item-right-header">
            <div class="list-item-header-name">张小林</div>
            <van-tag>置顶</van-tag>
          </div>
          <div class="list-item-right-content">
            <van-text-ellipsis
              rows="5"
              expand-text="全文"
              collapse-text="收起"
              content="开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了开学了"
            ></van-text-ellipsis>
            <van-config-provider
              :theme-vars="{ 'grid-item-content-padding': '0px' }"
              class="list-item-right-content-grid"
            >
              <van-grid column-num="3" gutter="4" :border="false">
                <van-grid-item v-for="item in 7" :key="item" @click="onPreview">
                  <van-image
                    radius="8"
                    fit="cover"
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                  ></van-image>
                </van-grid-item>
              </van-grid>
            </van-config-provider>
          </div>
          <div class="list-item-right-footer">
            <div class="list-item-right-footer-left">
              <span class="time">刚刚</span>
              <van-icon
                name="delete-o"
                size="18px"
                tag="span"
                @click="onDelete"
              ></van-icon>
            </div>
            <div class="list-item-right-footer-right">
              <van-icon
                name="flower-o"
                size="18px"
                tag="span"
                @click="onLike"
              ></van-icon>
              <van-icon
                name="chat-o"
                size="18px"
                tag="span"
                @click="onComment"
              ></van-icon>
            </div>
          </div>
          <div class="list-item-right-comment">
            <div class="list-item-right-comment-header">
              <van-icon name="flower-o" size="20px" tag="span" />
              <template v-for="item in 6" :key="item">
                <span>梁志超他奶奶</span>{{ item < 6 ? "、" : "" }}
              </template>
            </div>
            <van-config-provider :theme-vars="{ 'divider-margin': '8px 0' }">
              <van-divider></van-divider>
            </van-config-provider>
            <div class="list-item-right-comment-content">
              <div
                v-for="item in 3"
                :key="item"
                class="list-item-right-comment-content-item van-haptics-feedback"
                @click="onClickComment(item)"
              >
                <template v-if="item % 2">
                  <span class="user-name">梁志超他奶奶</span>:
                  <span>开学了</span>
                </template>
                <template v-else>
                  <span class="user-name">梁志超他奶奶</span>回复<span
                    class="user-name"
                    >梁志超</span
                  >:
                  <span>开学了</span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </van-pull-refresh>
  <van-floating-bubble
    axis="xy"
    icon="chat"
    magnetic="x"
    @click="jumpPublish"
  />
  <van-image-preview v-model:show="showImagePreview" :images="images">
    <template #image="{ src }">
      <video
        :src="src"
        style="width: 100%; height: 100%; object-fit: cover"
        controls
      ></video>
    </template>
  </van-image-preview>
  <van-action-sheet
    v-model:show="showActionSheet"
    :actions="actions"
    close-on-click-action
  ></van-action-sheet>
</template>

<script lang="ts" setup>
import { ActionSheetAction, showConfirmDialog, showToast } from "vant";

import api from "@/api";
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

const images = ref<string[]>([]);
const showImagePreview = ref(false);
const onPreview = () => {
  images.value = [
    "https://www.w3school.com.cn/i/movie.ogg",
    "https://www.w3school.com.cn/i/movie.ogg",
    "https://www.w3school.com.cn/i/movie.ogg",
  ];
  showImagePreview.value = true;
};

const onDelete = () => {
  showConfirmDialog({
    message: "确定删除该朋友圈?",
  }).catch((err) => {
    console.log(err);
  });
};

const onLike = () => {
  showToast({
    message: "点赞",
  });
};

const onComment = () => {
  showToast("评论");
};

const showActionSheet = ref(false);
const onClickComment = (item: number) => {
  showActionSheet.value = true;
};
const actions: ActionSheetAction[] = [
  {
    name: "回复",
    callback: onComment,
  },
  {
    name: "删除",
    color: "#ee0a24",
    callback: () => {
      showToast("删除");
    },
  },
];

onMounted(() => {
  api
    .allClassUsingGet()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="less" scoped>
.list-item {
  display: flex;
  padding: 0.6rem 1.2rem;

  &-right {
    flex: 1;
    padding-left: 0.2rem;

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.4rem;
    }

    &-content {
      font-size: 14px;

      &-grid {
        margin-top: 10px;
      }
    }

    &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      font-size: 14px;
      color: #ccc;

      &-left {
        display: flex;
        align-items: center;

        & > span {
          margin-right: 12px;
        }
      }

      &-right {
        display: flex;

        & > span {
          margin-left: 12px;
        }
      }
    }

    &-comment {
      background-color: #ccc;
      border-radius: 8px;
      padding: 8px;
      font-size: 14px;

      &-header {
        .van-icon {
          vertical-align: bottom;
        }
      }

      &-content {
        &-item {
          .user-name {
            color: blue;
          }
        }
      }
    }
  }
}
</style>
