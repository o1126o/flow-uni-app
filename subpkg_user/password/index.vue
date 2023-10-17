<script setup>
  import { reactive } from 'vue'

  // 表单项数据
  const user = reactive({
    mobile: '18612345678',
    code: '2468',
    password: '123456',
  })
</script>

<template>
  <view class="modify-password">
    <uni-forms ref="form" auto-complete="off">
      <uni-forms-item name="mobile">
        <input
          type="number"
          v-model="user.mobile"
          placeholder-style="color: #818181"
          placeholder="请输入手机号"
        />
      </uni-forms-item>
      <uni-forms-item name="code">
        <input
          type="number"
          v-model="user.code"
          placeholder-style="color: #818181"
          placeholder="请输入验证码"
        />
        <text class="text-button">获取验证码</text>
      </uni-forms-item>
      <uni-forms-item name="passsword">
        <input
          type="number"
          password
          v-model="user.password"
          placeholder-style="color: #818181"
          placeholder="请输入新密码"
        />
      </uni-forms-item>
      <button class="submit-button">确定修改</button>
    </uni-forms>
  </view>
</template>

<style lang="scss" scoped>
  .modify-password {
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
    border-top: 2rpx solid $uni-main-text-color;
    color: $uni-main-text-color;
    font-size: $uni-font-size-small;
    transition: none;
  }
  
  .text-button {
    width: 300rpx;
    padding-left: 10rpx;
    text-align: center;
    font-size: $uni-font-size-small;
    color: $uni-main-text-color;
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