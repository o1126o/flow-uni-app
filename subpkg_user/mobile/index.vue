<script setup>
import { reactive } from 'vue';

// 表单项数据
const user = reactive({
  mobile: '',
  code: ''
});
</script>

<template>
  <view class="bind-mobile">
    <uni-forms ref="form" :modelValue="user">
      <uni-forms-item name="mobile">
        <input type="number" v-model="user.mobile" placeholder-style="color: #818181" placeholder="请输入手机号" />
      </uni-forms-item>
      <uni-forms-item name="code">
        <input type="number" v-model="user.code" placeholder-style="color: #818181" placeholder="请输入验证码" />
        <text class="text-button">获取验证码</text>
      </uni-forms-item>
      <button class="submit-button">下一步</button>
    </uni-forms>
  </view>
</template>

<style lang="scss" scoped>
.bind-mobile {
  padding: 60rpx;
}

.uni-forms-item {
  height: 100rpx;
  margin-bottom: 20 !important;
  border-bottom: 2rpx solid #eee;
  box-sizing: border-box;
}

::v-deep .uni-forms-item__content {
  display: flex;
  align-items: center;
}

::v-deep input {
  width: 100%;
  font-size: $uni-font-size-base;
  color: $uni-main-text-color;
}

::v-deep .uni-forms-item__error {
  width: 100%;
  padding-top: 10rpx;
  border-top: 2rpx solid $uni-main-color;
  color: $uni-main-color;
  font-size: $uni-font-size-small;
  transition: none;
}

.text-button {
  width: 300rpx;
  padding-left: 10rpx;
  text-align: center;
  font-size: $uni-font-size-small;
  color:$uni-main-color;
  border-left: 2rpx solid #eee;
}

.submit-button {
  height: 100rpx;
  line-height: 100rpx;
  /* #ifdef APP */
  padding-top: 4rpx;
  /* #endif */
  margin-top: 80rpx;
  border: none;
  color: #fff;
  background-color: $uni-main-color;
  border-radius: 100rpx;
  font-size: $uni-font-size-big;
}

button[disabled] {
  background-color: #fadcd9;
  color: #fff;
}
</style>
