<script setup>
import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { deliver } from '@/api/task.js';
// 司机作业id
const id = ref('');

onLoad((query) => {
  id.value = query.id;
});

// 拍照上传回单凭证
const receiptPictrues = ref([]);
// 拍照上传回货品照片
const goodsPictrues = ref([]);


// 交付图片列表
const deliverPictureList = computed(() => {
  console.log(receiptPictrues.value);
  return receiptPictrues.value.map((item) => {
    return {
      url: item.url
    };
  });
});

// 交付凭证列表
const certificatePictureList = computed(() => {
  return goodsPictrues.value.map((item) => {
    return {
      url: item.url
    };
  });
});

// 验证数据方法, 通过的话按钮则为非禁用状态
const enableSubmit = computed(() => {
  console.log(deliverPictureList.value);
  console.log(certificatePictureList.value);
  return deliverPictureList.value.length > 0 && certificatePictureList.value.length > 0;
});

// 交付方法
const onSubmitForm = async () => {
  try {
    const data = {
      id: id.value,
      deliverPictureList: deliverPictureList.value,
      certificatePictureList: certificatePictureList.value
    };
    const result = await deliver(data);

    // 交付成功,跳转到任务列表页面
    uni.reLaunch({
      url: '/pages/task/index'
    });
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <view class="delivery-page">
    <view class="delivery-info">
      <!-- 拍照上传回单凭证 -->
      <uni-file-picker v-model="receiptPictrues" fileMediatype="image" file-extname="jpg,webp,gif,png" title="请拍照上传回单凭证" limit="3" />
      <!-- 拍照上传回货品照片 -->
      <uni-file-picker v-model="goodsPictrues" fileMediatype="image" file-extname="jpg,webp,gif,png" title="请拍照上传回单凭证" limit="3" />
    </view>
    <button @click="onSubmitForm" :disabled="!enableSubmit" class="button">提交</button>
  </view>
</template>

<style lang="scss" scoped>
.delivery-page {
  display: flex;
  flex-direction: column;
  background-color: $uni-bg-color;
  height: calc(100vh - 44px);
  box-sizing: border-box;
  padding: 30rpx 30rpx env(safe-area-inset-bottom);
  .delivery-info {
    background-color: #fff;
    border-radius: 20rpx;
    padding: 40rpx;
  }
}

::v-deep .uni-file-picker__header {
  margin-bottom: 32rpx;
}
::v-deep .uni-file-picker__container {
  margin-bottom: 45rpx;
}
.button {
  width: 100%;
  height: 100rpx;
  text-align: center;
  line-height: 100rpx;
  /* #ifdef APP */
  padding-top: 4rpx;
  /* #endif */
  border-radius: 100rpx;
  margin-top: 60rpx;
  color: #fff;
  font-size: $uni-font-size-big;
  background-color: $uni-main-color;

  &[disabled] {
    color: #fff;
    background-color: #fadcd9;
  }
}
</style>
