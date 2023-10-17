<script setup>
import { ref } from 'vue';
const checValue = ref(false);
const handleChange = () => {
  checValue.value = !checValue.value
}
</script>

<template>
  <view class="notify-page">
    <view class="tips">开启后，有新的任务通知你</view>
    <uni-list :border="false">
      <uni-list-item title="允许给我推送任务通知">
        <template v-slot:footer>
          <switch :checked="checValue" style="transform: scale(0.7)" color="#EF4F3F" @change="handleChange" />
        </template>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<style lang="scss" scoped>
.notify-page {
  display: flex;
  flex-direction: column;
  background-color: $uni-bg-color;
  height: calc(100vh - 44px);
  box-sizing: border-box;
  padding: 40rpx 0 env(safe-area-inset-bottom);
}
.tips {
  padding-left: 40rpx;
  margin-bottom: 10rpx;
  font-size: 28rpx;
  color: #818181;
}

::v-deep .uni-list-item__container {
  align-items: center;
  padding-left: 40rpx;
}

::v-deep .uni-list-item__content-title {
  font-size: 32rpx;
}

::v-deep .uni-switch-input {
  width: 110rpx;
  height: 64rpx;
}
</style>
