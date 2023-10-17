<script setup>
import { ref } from 'vue';
import VehicleOptions from './VehicleOptions';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/task.js';
const { recordData } = storeToRefs(useTaskStore());

// 控制选项显示还是隐藏
const show = ref(false);
// 监听单选框的切换
const onRadioChange = (e) => {
  show.value = e.detail.value == 1 ? true : false;
  recordData.value.isBreakRules = show.value;
};

// 数据源
const initialData = ref([
  {
    title: '违章类型',
    dataKey: 'breakRulesType',
    types: [
      { id: 1, text: '闯红灯' },
      { id: 2, text: '无证驾驶' },
      { id: 3, text: '超载' },
      { id: 4, text: '酒后驾驶' },
      { id: 5, text: '超速驾驶' },
      { id: 6, text: '其它' }
    ]
  },
  {
    title: '罚款金额',
    dataKey: 'penaltyAmount',
    types: [
      { id: '0', text: '0元' },
      { id: '100', text: '100元' },
      { id: '200', text: '200元' },
      { id: '300', text: '300元' },
      { id: '500', text: '500元' },
      { id: '1000', text: '1000元' },
      { id: '2000', text: '2000元' }
    ]
  },
  {
    title: '扣分',
    dataKey: 'deductPoints',
    types: [
      { id: '0', text: '0分' },
      { id: '1', text: '1分' },
      { id: '2', text: '2分' },
      { id: '3', text: '3分' },
      { id: '6', text: '6分' },
      { id: '12', text: '12分' }
    ]
  }
]);

const onOptionSelect = (parentIndex, childIndex) => {
  initialData.value[parentIndex].activeIndex = childIndex;
};
</script>

<template>
  <view class="vehicle-panel">
    <view class="vehicle-panel-header">
      <uni-list>
        <uni-list-item title="交通违章">
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
    <view class="vehicle-panel-body" v-show="show">
      <uni-list :border="false">
        <uni-list-item direction="column" :border="false" v-for="(item, index) in initialData" :key="index" :title="item.title">
          <template v-slot:footer>
            <VehicleOptions :dataKey="item.dataKey" :types="item.types"></VehicleOptions>
            <textarea v-model="recordData.breakRulesDescription" v-if="index === 0 && recordData.breakRulesType === 6" placeholder="请输入" />
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
