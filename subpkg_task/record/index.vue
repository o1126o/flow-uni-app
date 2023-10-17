<script setup>
import VehicleViolation from './components/VehicleViolation';
import VehicleBreakdown from './components/VehicleBreakdown';
import VehicleAccident from './components/VehicleAccident';

import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { storeToRefs } from 'pinia';

// 回车登记
import { truckRegistration } from '@/api/task.js';

import { useTaskStore } from '@/stores/task.js';

// 回车登记的全部数据
const { recordData } = storeToRefs(useTaskStore());

// 初始化数据
onLoad((query) => {
  console.log(query);
  // 运输任务id
  recordData.value.id = query.transportTaskId;
  // 出车时间
  recordData.value.startTime = query.actualDepartureTime;
});

// 提交回车登记方法
const onFormSubmit = async () => {
  try {
    recordData.value.accidentImagesList = recordData.value.accidentImagesList.map((item) => {
      return {
        url: item.url
      };
    });
    recordData.value.faultImagesList = recordData.value.faultImagesList.map((item) => {
      return {
        url: item.url
      };
    });
    console.log('recordData', recordData.value);
    const result = await truckRegistration(recordData.value);
    if (result.code != 200) return;
    // 提交回车登记成功之后, 回车任务列表页面
    uni.reLaunch({
      url: '/pages/task/index'
    });
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <view class="record-page">
    <scroll-view class="scroll-view" scroll-y>
      <view class="scroll-view-wrapper">
        <uni-list>
          <uni-list-item title="出车时间" :right-text="recordData.startTime" show-arrow></uni-list-item>
          <uni-list-item title="回车时间" show-arrow>
            <template v-slot:footer>
              <uni-datetime-picker v-model="recordData.endTime">
                <view class="timeText">{{ recordData.endTime || '请选择' }}</view>
              </uni-datetime-picker>
            </template>
          </uni-list-item>
        </uni-list>
        <!-- 车辆违章 -->
        <VehicleViolation></VehicleViolation>
        <!-- 车辆故障 -->
        <VehicleBreakdown></VehicleBreakdown>
        <!-- 交通事故 -->
        <VehicleAccident></VehicleAccident>
      </view>
    </scroll-view>
    <view class="toolbar">
      <button @click="onFormSubmit" class="button">提交登记</button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>