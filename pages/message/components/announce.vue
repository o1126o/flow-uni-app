<script setup>
import { ref, onMounted } from 'vue';
import { getMessage, getReadAll } from '@/api/message.js';

// 页码
const nextPage = ref(0);
const pageSize = ref(5);

// 保存公告数据
const getMsgList = ref([]);

// 判断是否显示暂无数据 false表示有数据 true没有数据
const isEmpty = ref(false);
// false表示还有数据数据没有加载, true则表示所有数据已经加载完成
const hasMore = ref(false);
// 是否加载完成
const isTriggered = ref(false);

//  消息类型
const contentType = ref('200');

// 任务列表
const getAnnounceList = async () => {
  // 更新下一页页码
  nextPage.value += 1;
  // 请求数据
  const res = await getMessage(contentType.value, nextPage.value, pageSize.value);
  // 如果是页码是1,则表示执行了下拉刷新,这个时候需要清空数组
  if (nextPage.value === 1) getMsgList.value = [];
  // 保存列表的数据
  getMsgList.value = [...getMsgList.value, ...(res.data.items || [])];
  // 判断是否加载到最后一页数据
  hasMore.value = nextPage.value == res.data.pages;
  // 判断如果没有请求到数据的话,则设置isEmpty未true,它为true的表示暂无数据
  isEmpty.value = getMsgList.value.length === 0;
};

// 生命周期
onMounted(() => {
  getAnnounceList();
});

// 滚动到底部/右边，会触发 scrolltolower 事件
const onScrollToLower = () => {
  if (hasMore.value) return;
  getAnnounceList();
};

// 下拉刷新 自定义下拉刷新被触发
const onRefresh = async () => {
  // 是否加载完成
  isTriggered.value = true;
  nextPage.value = 0;
  await getAnnounceList();
  isTriggered.value = false;
};

// 全部已读
const handleAllOk = async () => {
  try {
    const result = await getReadAll(contentType.value);
    nextPage.value = 0;
    getAnnounceList();
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <scroll-view
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresh"
    :refresher-enabled="true"
    @scrolltolower="onScrollToLower"
    scroll-y="true"
    class="scroll-view"
    refresher-background="#f4f4f4;"
  >
    <view class="scroll-view-wrapper" v-if="getMsgList.length > 0">
      <view class="announce">
        <view class="message-action" @click="handleAllOk">
          <text class="iconfont icon-clear"></text>
          全部已读
        </view>
        <uni-list>
          <uni-list-item
            v-for="(item, index) in getMsgList"
            :key="item.id"
            :title="item.title"
            :right-text="item.created"
            ellipsis="1"
            :to="`/subpkg_message/content/index?id=${item.id}`"
          >
            <template v-slot:header>
              <text v-if="item.isRead === 0" class="dot"></text>
            </template>
          </uni-list-item>
        </uni-list>
      </view>
      <view v-if="isEmpty" class="message-blank">暂无消息</view>
    </view>
  </scroll-view>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
