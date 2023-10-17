<script setup>
import { ref } from 'vue';
import Account from './components/account.vue';
import Mobile from './components/Mobile.vue';

// 定义登录类型切换文本
const tabMetas = ref([
  {
    title: '账号登录',
    subTitle: '手机号登陆'
  },
  {
    title: '手机号登陆',
    subTitle: '账号登录'
  }
]);

// 登录类型索引值
const tabIndex = ref(0);

// 切换登录类型
const changeLoginType = () => {
  tabIndex.value = Math.abs(tabIndex.value - 1);
};
</script>

<template>
  <view class="login">
    <view class="login-top">
      <!-- <view class="title">神领快递</view> -->
    </view>

    <view class="login-head">
      <!-- 标题切换 -->
      <view class="headBig">{{ tabMetas[tabIndex].title }}</view>
      <view class="headMini">
        <text class="type" @click="changeLoginType">{{ tabMetas[tabIndex].subTitle }}</text>
        <text class="iconfont icon-caret"></text>
      </view>
    </view>

    <!-- 账号登录 -->
    <Account v-if="tabIndex === 0"></Account>
    <!-- 手机号登录 -->
    <Mobile v-else></Mobile>
  </view>
</template>

<style lang="scss">
@import './index.scss';
</style>
