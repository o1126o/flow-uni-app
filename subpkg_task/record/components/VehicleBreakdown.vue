<script setup>
import { ref } from 'vue';
import VehicleOptions from './VehicleOptions.vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/task.js';
const { recordData } = storeToRefs(useTaskStore());

// 控制选项显示还是隐藏
const show = ref(false);

// 监听单选框的切换
const onRadioChange = (e) => {
  show.value = e.detail.value == 1 ? true : false;
  recordData.value.isFault = show.value;
};

// 故障类型
const types = ref([
  { id: 1, text: '启动困难' },
  { id: 2, text: '不着车' },
  { id: 3, text: '漏油' },
  { id: 4, text: '漏水' },
  { id: 5, text: '照明失灵' },
  { id: 6, text: '有异响' },
  { id: 7, text: '排烟异常' },
  { id: 8, text: '温度异常' },
  { id: 9, text: '其他' }
]);
</script>
<template>
  <view class="vehicle-panel">
    <view class="vehicle-panel-header">
      <uni-list>
        <uni-list-item title="车辆故障">
          <template v-slot:footer>
            <radio-group class="radio-group" @change="onRadioChange">
              <label class="radio">
                <radio value="1" color="#e74531" />
                <text>是</text>
              </label>
              <label class="radio">
                <radio checked value="0" color="#e74531" />
                <text>否</text>
              </label>
            </radio-group>
          </template>
        </uni-list-item>
      </uni-list>
    </view>
    <view v-show="show" class="vehicle-panel-body">
      <uni-list>
        <uni-list-item direction="column" title="故障类型">
          <template v-slot:footer>
            <VehicleOptions dataKey="faultType" :types="types"></VehicleOptions>
          </template>
        </uni-list-item>
        <uni-list-item v-if="recordData.faultType === 9">
          <template v-slot:footer>
            <textarea v-model="recordData.faultDescription" placeholder="请输入故障描述" />
          </template>
        </uni-list-item>
        <uni-list-item direction="column" title="请上传车辆故障照片">
          <template v-slot:footer>
            <uni-file-picker v-model="recordData.faultImagesList"></uni-file-picker>
          </template>
        </uni-list-item>
      </uni-list>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.vehicle-panel {
  border-radius: 16rpx;
  overflow: hidden;
  margin-bottom: 30rpx !important;
}
.uni-list {
  padding: 0 30rpx;
}
.vehicle-panel {
  margin-top: 30rpx;
}
.radio-group {
  width: 230rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28rpx;
  color: #818181;
}
::v-deep .uni-radio-input {
  width: 35rpx;
  height: 35rpx;
}
</style>
