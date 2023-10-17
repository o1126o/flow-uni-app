<script setup>
import { ref, onMounted } from 'vue';
import { getTasks } from '@/api/task.js';

const requestParams = ref({
  // 页码
  page: 0,
  // 条数
  pageSize: 5,
  //作业状态，1为待提货）、2为在途(在途和已交付)、3为改派、5为已作废、6为已完成（已回车登记）
  status: 6
});

// 已完成任务列表
const completeList = ref([]);
// 在途列任务列表是否为空
const isEmpty = ref(false);
// 是否有更多数据
const hasMore = ref(true);
// 下拉交互动画
const isTriggered = ref(false);

// 生命周期（获取数据）
onMounted(() => {
  getCompleteList();
});

// 监听用户的下拉操作
const onRefresh = async () => {
  isTriggered.value = true;
  requestParams.value.page = 0;
  await getCompleteList();
  // 关闭动画交互
  isTriggered.value = false;
};

// 上拉分页
// 滚动到底部/右边，会触发 scrolltolower 事件
const onScrollToLower = () => {
  if (!hasMore.value) return;
  // 获取下一页数据
  getCompleteList();
};

// 在途任务列表
async function getCompleteList() {
  // 更新下一页页码
  requestParams.value.page += 1;
  // 请求数据
  const res = await getTasks(requestParams.value);
  // 页面为 1 时，清空数组
  if (requestParams.value.page === 1) completeList.value = [];
  // 渲染任务列表
  completeList.value = [...completeList.value, ...(res.data.items || [])];
  console.log(completeList.value);
  // 判断列表是否为空
  isEmpty.value = completeList.value.length === 0;
  // 判断还有没有更多的数据
  hasMore.value = requestParams.value.page == res.data.pages;
}
</script>

<template>
  <view class="task-search">
    <view class="search-bar">
      <text class="iconfont icon-search"></text>
      <input class="input" type="text" placeholder="输入任务编号" />
    </view>
    <view class="filter-bar">
      <picker class="picker" mode="date">2023.05.20</picker>
      <text class="text">至</text>
      <picker class="picker" mode="date">结束时间</picker>
      <button disabled class="button">筛选</button>
    </view>
  </view>
  <scroll-view 
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresh"
    refresher-enabled
    @scrolltolower="onScrollToLower"
    scroll-y="true"
    class="scroll-view-wrapper"
    refresher-background="#f4f4f4;"
  >
    <view v-for="complete in completeList" :key="complete.id" class="card">
      <navigator hover-class="none" :url="`/subpkg_task/detail/index?id=${complete.id}`">
        <view class="header">
          <text class="title">任务编号: {{ complete.transportTaskId }}</text>
        </view>
        <view class="content">
          <view class="content-item">
            <view class="line">{{ complete.startAddress }}</view>
            <view class="line">{{ complete.endAddress }}</view>
          </view>
        </view>
      </navigator>
      <view class="footer">
        <view class="time">提货时间</view>
        <view class="time">{{ complete.created }}</view>
      </view>
    </view>
    <view class="ass">
      
    </view>
    <view class="texts" v-if="!hasMore">已经到达底部了~</view>
    <view v-if="isEmpty" class="task-blank">无完成货物</view>
  </scroll-view>
</template>

<style lang="scss" scoped>
@import './style.scss';

.texts {
  padding: 20rpx 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20rpx;
  color: #ccc;
}
.ass {
  height: 300rpx;
}

.task-search {
  padding: 30rpx;
  // margin-top: -1rpx;
  background-color: #fff;
  border-bottom: 1rpx solid #eee;

  .search-bar {
    position: relative;

    .icon-search {
      position: absolute;
      top: 22rpx;
      left: 24rpx;
      color: $uni-secondary-text-color;
      font-size: $uni-font-size-small;
    }

    .input {
      height: 72rpx;
      background-color: #f4f4f4;
      border-radius: 72rpx;
      padding-left: 72rpx;
      font-size: $uni-font-size-small;
    }
  }

  .filter-bar {
    display: flex;
    margin-top: 30rpx;
    font-size: $uni-font-size-small;
    text-align: center;
    line-height: 64rpx;
    color: $uni-secondary-text-color;

    .picker {
      width: 230rpx;
      height: 64rpx;
      border-radius: 64rpx;
      background-color: $uni-bg-color;
    }

    .text {
      margin: 0 24rpx;
    }

    .button {
      width: 120rpx;
      height: 64rpx;
      padding: 0;
      margin-left: 40rpx;
      line-height: 64rpx;
      border-radius: 64rpx;
      font-size: $uni-font-size-small;
      color: #fff;
      background-color: $uni-main-color;

      &[disabled] {
        background-color: #fadcd9;
      }
    }
  }
}
</style>
