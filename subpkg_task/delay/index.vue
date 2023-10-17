<script setup>
import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { takeDelay } from '@/api/task.js';
// 原计划提货时间
const planDepartureTime = ref('');
// 延迟提货任务的ID
const id = ref('');
// 获取地址上的参数
onLoad((query) => {
  // 原计划提货时间
  planDepartureTime.value = query.planDepartureTime;
  // 延迟提货任务的ID
  id.value = query.id;
});

// 延迟提货时间
const delayTime = ref('');

// 监听选择的时间
const onPickerChange = (e) => {
  console.log('e=>', e);
  const [date] = planDepartureTime.value.split(' ');
  delayTime.value = `${date} ${e.detail.value}`;
};
// 验证延迟时间
const delayTimeValid = computed(() => {
  // 延迟时间不超过2小时
  const start = new Date(planDepartureTime.value);
  const end = new Date(delayTime.value);
  // 时间差区间在 0 ~ 7200 * 1000 毫秒
  return end - start > 0 && end - start < 7200 * 1000;
});

// 输入字数
const wordsCount = computed(() => delayReason.value.length);
// 延迟提货原因
const delayReason = ref('');
// 验证延迟原因
const delayReasonValid = computed(() => {
  return wordsCount.value <= 50 && wordsCount.value > 0;
});

// 是否允许提交表单
const enableSubmit = computed(() => {
  return !delayReasonValid.value || !delayTimeValid.value;
});
console.log('enableSubmit=>', enableSubmit);

// 提交表单
const onSubmitForm = async () => {
  // 待提交的表单数据
  const formData = {
    id: id.value,
    delayTime: delayTime.value,
    delayReason: delayReason.value
  };
  const res = await takeDelay(formData);
  console.log; // 跳转到任务列表
  uni.reLaunch({ url: '/pages/task/index' });
};
</script>

<template>
  <view class="delay-page">
    <uni-list :border="false">
      <uni-list-item title="原定时间" :right-text="planDepartureTime" />
      <uni-list-item title="延迟时间" showArrow>
        <template v-slot:footer>
          <picker @change="onPickerChange" class="time-picker" mode="time">
            <text v-if="!delayTime" class="timeText">不可超过2个⼩时</text>
            <text v-else class="timeText" :class="{ error: !delayTimeValid }">{{ delayTime + ':00' }}</text>
          </picker>
        </template>
      </uni-list-item>
      <uni-list-item direction="column">
        <template v-slot:body>
          <view class="textarea-wrapper">
            <textarea class="textarea" v-model="delayReason" placeholder-style="color: #818181" placeholder="请输入延迟提货原因"></textarea>
            <text :class="{ error: wordsCount > 50 }" class="words-count">{{ wordsCount }}/50</text>
          </view>
        </template>
      </uni-list-item>
      <uni-list-item :border="false">
        <template v-slot:body>
          <button @click="onSubmitForm" :disabled="enableSubmit" class="button">提交</button>
        </template>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>