<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { userApi, userTask } from '@/api/user.js';

onLoad(() => {
  getUserProfile();
  getTaskInfo();
});

// 用户信息
const userProfile = ref({});

// 任务数据
const taskInfo = ref({});

// 用户信息接口
const getUserProfile = async () => {
  try {
    const res = await userApi();
    // 渲染请求来的数据
    userProfile.value = res.data;
  } catch (err) {
    console.log(err);
  }
};

// 任务数据
const getTaskInfo = async () => {
  try {
    const res = await userTask('2023', '07');
    // 渲染请求来的数据
    taskInfo.value = res.data;
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <view class="page-container">
    <view class="user-profile">
      <image class="avatar" :src="userProfile.avatar" mode=""></image>
      <text class="username">{{ userProfile.name }}</text>
      <text class="no">司机编号：{{ userProfile.number }}</text>
      <text class="mobile">手机号码：{{ userProfile.phone }}</text>
    </view>
    <view class="month-overview">
      <view class="title">我的任务</view>
      <view class="content">
        <view class="item">
          <text class="volumn">{{ taskInfo.completedAmounts }}</text>
          <text class="label">任务总量</text>
        </view>
        <view class="item">
          <text class="volumn">{{ taskInfo.taskAmounts }}</text>
          <text class="label">完成任务量</text>
        </view>
        <view class="item">
          <text class="volumn">{{ taskInfo.transportMileage }}</text>
          <text class="label">运输里程(km)</text>
        </view>
      </view>
    </view>
    <view class="entry-list">
      <uni-list :border="false">
        <uni-list-item to="/subpkg_user/truck/index" showArrow title="车辆信息" />
        <uni-list-item to="/subpkg_user/task/index" showArrow title="任务数据" />
        <uni-list-item to="/subpkg_user/settings/index" showArrow title="系统设置" />
      </uni-list>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
