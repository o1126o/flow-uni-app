<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { userTruck } from '@/api/user.js';

// 车辆信息
const userTruckInfo = ref({})

onLoad(() => {
  getTruckInfo()
})

// 车辆信息接口
const getTruckInfo = async () => {
  try {
    const res = await userTruck();
    console.log(res, '111');
    // 渲染请求来的数据
    userTruckInfo.value = res.data;
  } catch (err) {
    console.log(err);
  }
}
</script>
<template>
  <view class="truck">
    <view class="truck-info">
      <view class="item">
        <text class="left-text">车辆编号</text>
        <text class="right-text">{{ userTruckInfo.id }}</text>
      </view>
      <view class="item">
        <text class="left-text">车辆号牌</text>
        <text class="right-text">{{ userTruckInfo.licensePlate }}</text>
      </view>
      <view class="item">
        <text class="left-text">车型</text>
        <text class="right-text">{{ userTruckInfo.truckType }}</text>
      </view>
      <view class="item">
        <text class="left-text">所属机构</text>
        <text class="right-text">{{ userTruckInfo.currentOrganName }}</text>
      </view>
      <view class="item">
        <text class="left-text">载重</text>
        <text class="right-text">{{ userTruckInfo.allowableLoad }}吨</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
