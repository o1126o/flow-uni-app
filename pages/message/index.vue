<script setup>
import { ref, reactive } from 'vue';

import Announce from './components/announce';
import Notify from './components/notify';

// Tab 标签页索引
const tabIndex = ref(0);
const tabList = reactive([
  {
    title: '公告',
    rendered: true
  },
  {
    title: '任务通知',
    rendered: false
  }
]);

// 切换组件
const onTabChange = (index) => {
  tabList[index].rendered = true;
  tabIndex.value = index;
};
</script>

<template>
  <view class="message">
    <view class="message-tabbar">
      <view v-for="(item, index) in tabList" :key="index" @click="onTabChange(index)" class="tab-item">
        <view class="title" :class="{ active: tabIndex === index }">
          {{ item.title }}
        </view>
      </view>
    </view>
    <view class="message-list" v-show="tabIndex === 0" v-if="tabList[0].rendered">
      <!-- 公告组件 -->
      <Announce></Announce>
    </view>
    <view class="message-list" v-show="tabIndex === 1" v-if="tabList[1].rendered">
      <!-- 任务通知组件 -->
      <Notify></Notify>
    </view>
  </view>
</template>

<style lang="scss">
@import './index.scss';
</style>
