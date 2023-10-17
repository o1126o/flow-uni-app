<script setup>
import { ref } from 'vue';
import Pickup from './components/Pickup.vue';
import Delivery from './components/Delivery.vue';
import Complete from './components/Complete.vue';

// 控制tab的选中
const tabIndex = ref(0);

// tab的数据
const tabMetas = ref([
  { title: '待提货', rendered: true },
  { title: '在途', rendered: false },
  { title: '已完成', rendered: false }
]);

// 监听tab切花
const changeTab = (index) => {
  tabMetas.value[index].rendered = true;
  tabIndex.value = index;
};
</script>

<template>
  <view class="page-container">
    <view class="tab">
      <view @click="changeTab(index)" class="tab-item" v-for="(item, index) in tabMetas" :key="index">
        <view class="title" :class="{ active: tabIndex === index }">
          {{ item.title }}
        </view>
      </view>
    </view>
    <view class="message-list" v-show="tabIndex === 0" v-if="tabMetas[0].rendered">
      <!-- 待提货 -->
      <Pickup></Pickup>
    </view>
    <view class="message-list" v-show="tabIndex === 1" v-if="tabMetas[1].rendered">
      <!-- 在途 -->
      <Delivery></Delivery>
    </view>
    <view class="message-list" v-show="tabIndex === 2" v-if="tabMetas[2].rendered">
      <!-- 已完成 -->
      <Complete></Complete>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
