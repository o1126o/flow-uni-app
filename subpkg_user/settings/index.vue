<script setup>
import { useUserStore } from '@/stores/user.js';
const store = useUserStore();
// 清理缓存
const handleClean = () => {
  uni.showModal({
    title: '清理缓存后会清空所有数据',
    success: function (res) {
      if (res.confirm) {
        uni.showToast({
          title: '清除成功',
          icon: 'none',
          duration: 600
        });
      } else if (res.cancel) {
        uni.showToast({
          title: '取消成功',
          icon: 'none',
          duration: 300
        });
      }
    }
  });
};

// 退出登录
const handleLoyout = () => {
  uni.showModal({
    title: '确定要退出登录',
    success: function (res) {
      if (res.confirm) {
        store.loyout()
         uni.reLaunch({ url: '/pages/login/index' });
      } else if (res.cancel) {
        uni.showToast({
          title: '已取消',
          icon: 'none',
          duration: 300
        });
      }
    }
  });
};
</script>

<template>
  <view class="setting-page">
    <view class="setting-list">
      <uni-list :border="false">
        <uni-list-item title="换绑手机" to="/subpkg_user/mobile/index" show-arrow />
        <uni-list-item title="修改密码" to="/subpkg_user/password/index" show-arrow />
        <uni-list-item title="消息通知设置" to="/subpkg_user/notify/index" show-arrow />
        <uni-list-item title="清理缓存" :link="true" show-arrow @click="handleClean" />
      </uni-list>
    </view>
    <button class="logout-button" @click="handleLoyout">退出</button>
  </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
