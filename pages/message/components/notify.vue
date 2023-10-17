<script setup>
import { ref, onMounted } from 'vue';
import { getMessage, getReadAll } from '@/api/message.js';
// 页码
const nextPage = ref(0);
const pageSize = ref(5);

// 保存公告数据
const notifyList = ref([]);

// 判断是否显示暂无数据 false表示有数据 true没有数据
const isEmpty = ref(false);
// false表示还有数据数据没有加载, true则表示所有数据已经加载完成
const hasMore = ref(false);
// 是否加载完成
const isTriggered = ref(false);
//  消息类型
const contentType = ref('201');

// 任务列表
const getNotifyList = async () => {
  // 更新下一页页码
  nextPage.value += 1;
  // 请求数据
  const res = await getMessage(contentType.value, nextPage.value, pageSize.value);
  // 如果是页码是1,则表示执行了下拉刷新,这个时候需要清空数组
  if (nextPage.value === 1) notifyList.value = [];
  // 保存列表的数据
  notifyList.value = [...notifyList.value, ...(res.data.items || [])];
  // 判断是否加载到最后一页数据
  hasMore.value = nextPage.value == res.data.pages;
  // 判断如果没有请求到数据的话,则设置isEmpty未true,它为true的表示暂无数据
  isEmpty.value = notifyList.value.length === 0;
};

// 生命周期
onMounted(() => {
  getNotifyList();
});

// 滚动到底部/右边，会触发 scrolltolower 事件
const onScrollToLower = () => {
  if (hasMore.value) return;
  getNotifyList();
};

// 下拉刷新 自定义下拉刷新被触发
const onRefresh = async () => {
  // 是否加载完成
  isTriggered.value = true;
  nextPage.value = 0;
  await getNotifyList();
  isTriggered.value = false;
};

// 全部已读
const handleAllOk = async () => {
  try {
    const result = await getReadAll(contentType.value);
    nextPage.value = 0;
    getNotifyList();
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <scroll-view
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresh"
    refresher-enabled
    @scrolltolower="onScrollToLower"
    scroll-y="true"
    class="scroll-view"
    refresher-background="#f4f4f4;"
  >
    <view class="scroll-view-wrapper" v-if="notifyList.length > 0">
      <view class="nofity">
        <view class="message-action" @click="handleAllOk">
          <text class="iconfont icon-clear"></text>
          全部已读
        </view>
        <uni-card v-for="notify in notifyList" :key="notify.id" :border="false" :is-shadow="false">
          <view class="brief">{{ notify.content }}</view>
          <view class="extra">
            <text class="time">{{ notify.created }}</text>
            <navigator hover-class="none" class="link" :url="`/subpkg_task/detail/index?id=${notify.relevantId}`">查看详情</navigator>
          </view>
          <template v-slot:title>
            <view :class="{ unread: !notify.isRead }" class="title unread">
              您有新的运输任务
              <text class="dots" v-if="notify.isRead === 0"></text>
            </view>
          </template>
        </uni-card>
        <view class="tips" v-if="hasMore">已经到达底部了~</view>
      </view>
      <view v-if="isEmpty" class="message-blank">暂无消息</view>
    </view>
  </scroll-view>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
