<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getTasks } from '@/api/task.js';

// 数据列表
const tasksList = ref([]);
// 请求的参数
const requestParams = ref({
  // 页码
  page: 0,
  // 条数
  pageSize: 5,
  //作业状态，1为待提货）、2为在途(在途和已交付)、3为改派、5为已作废、6为已完成（已回车登记）
  status: 2
});

// 判断是否显示暂无数据 false表示有数据 true没有数据
const isEmpty = ref(false);
// false表示还有数据数据没有加载, true则表示所有数据已经加载完成
const hasMore = ref(false);
// 是否加载完成
const isTriggered = ref(false);

// 任务列表
const getTasksList = async () => {
  // 更新下一页页码
  requestParams.value.page += 1;
  // 请求数据
  const res = await getTasks(requestParams.value);
  // 如果是页码是1,则表示执行了下拉刷新,这个时候需要清空数组
  if (requestParams.value.page === 1) tasksList.value = [];
  // 保存列表的数据
  tasksList.value = [...tasksList.value, ...(res.data.items || [])];
  // 判断是否加载到最后一页数据
  hasMore.value = requestParams.value.page == res.data.pages;
  // 判断如果没有请求到数据的话,则设置isEmpty未true,它为true的表示暂无数据
  isEmpty.value = tasksList.value.length === 0;
};

// 生命周期
onLoad(() => {
  getTasksList();
});

// 滚动到底部/右边，会触发 scrolltolower 事件
const onScrollToLower = () => {
  if (hasMore.value) return;
  getTasksList();
};

// 下拉刷新 自定义下拉刷新被触发
const onRefresh = async () => {
  // 是否加载完成
  isTriggered.value = true;
  requestParams.value.page = 0;
  await getTasksList();
  isTriggered.value = false;
};
</script>

<template>
  <scroll-view
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresh"
    refresher-enabled
    @scrolltolower="onScrollToLower"
    scroll-y="true"
    class="scroll-view-wrapper"
    refresher-background="#f4f4f4;"
  >
    <view class="card" v-for="(item, index) in tasksList" :key="index">
      <navigator hover-class="none" :url="`/subpkg_task/detail/index?id=${item.id}`">
        <view class="header">
          <view class="title">任务编号：{{ item.transportTaskId }}</view>
        </view>
        <view class="content">
          <view class="content-item">
            <view class="line">{{ item.startAddress }}</view>
            <view class="line">{{ item.endAddress }}</view>
          </view>
        </view>
      </navigator>
      <view class="footer">
        <view class="time">
          <view>到货时间</view>
          <view>{{ item.planDepartureTime }}</view>
        </view>
        <navigator v-if="item.status === 2" class="action" :url="`/subpkg_task/delivery/index?id=${item.id}`">交付</navigator>
        <navigator v-if="item.status === 4" class="action" :url="`/subpkg_task/record/index?transportTaskId=${item.transportTaskId}&actualDepartureTime=${item.actualDepartureTime}`">回车登记</navigator>
      </view>
    </view>
    <view v-if="isEmpty" class="task-blank">暂无消息</view>
  </scroll-view>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
