<script setup>
import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { reportException } from '@/api/task.js';

// 运输任务id
const transportTaskId = ref('');

// 初始化加载
onLoad((query) => {
  transportTaskId.value = query.transportTaskId;
});

// 异常时间
const exceptionPicker = ref('');
const exceptionTime = computed(() => {
  return exceptionPicker.value || '请选择';
});

// 上报异常位置
const exceptionPlace = ref('');
// 地图
const onLocationChoose = async () => {
  const { address } = await uni.chooseLocation({});
  console.log('address', address);
  exceptionPlace.value = address;
};

// 异常类型(传中文) 发动机启动困难，不着车，漏油，漏水，照明失灵，有异响，排烟异常，温度异常，其他
const exceptionType = ref('');
const popup = ref('popup');
const exceptionTypes = ['发动机启动困难', '不着车，漏油', '照明失灵', '排烟异常、温度异常', '其他问题'];
const openPopup = () => {
  popup.value.open();
};
const tempException = [];
const onCheckboxChange = (e) => {
  tempException.push(e.detail.value[0]);
  console.log('tempException', tempException);
};
const onPopupConfirm = () => {
  // 关闭弹出层
  popup.value.close();
  exceptionType.value = tempException.join('|');
};

// 异常描述(可选)
const exceptionDescribe = ref('');

// 异常图片 (可选) 数组
const exceptionPictures = ref([]);

// 过滤出图片的url地址
const exceptionImagesList = computed(() => {
  return exceptionPictures.value.map((item) => {
    return {
      url: item.url
    };
  });
});

// 提交异常方法
const onSubmitForm = async () => {
  try {
    const data = {
      transportTaskId: transportTaskId.value,
      exceptionTime: exceptionTime.value,
      exceptionPlace: exceptionPlace.value,
      exceptionType: exceptionType.value,
      exceptionImagesList: exceptionImagesList.value
    };

    const result = await reportException(data);

    // 上报异常成功之后,跳转到任务列表页面
    uni.reLaunch({
      url: '/pages/task/index'
    });
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <view class="except-page">
    <scroll-view class="scroll-view" scroll-y>
      <view class="scroll-view-wrapper">
        <uni-list :border="false">
          <uni-list-item show-arrow right-text="请选择" title="异常时间">
            <template v-slot:footer>
              <uni-datetime-picker v-model="exceptionPicker">
                <view class="picker-value">{{ exceptionTime }}</view>
              </uni-datetime-picker>
            </template>
          </uni-list-item>
          <uni-list-item show-arrow clickable ellipsis="1" @click="onLocationChoose" title="上报位置" :right-text="exceptionPlace || '请选择'" />
          <uni-list-item clickable @click="openPopup" title="异常类型" :right-text="exceptionType || '请选择'" show-arrow></uni-list-item>
          <uni-list-item title="异常描述">
            <template v-slot:body>
              <view>
                <textarea v-model="exceptionDescribe" placeholder="请输入异常描述" />
              </view>
            </template>
          </uni-list-item>
          <uni-list-item title="上传图片(最多3张)" direction="column">
            <template v-slot:footer>
              <uni-file-picker v-model="exceptionPictures" file-extname="jpg,webp,gif,png" limit="3"></uni-file-picker>
            </template>
          </uni-list-item>
        </uni-list>
      </view>
    </scroll-view>
    
    <view>
    			<button @click="onSubmitForm" type="default">提交</button>
    		</view>
    
    		<uni-popup ref="popup" type="bottom">
    			<view style="background-color: #fff; min-height: 500rpx; border-top-left-radius: 50rpx; border-top-right-radius: 50rpx">
    				<view class="title">选择类型</view>
    				<uni-list>
    					<uni-list-item v-for="(item, index) in exceptionTypes" :key="index" :title="item">
    						<template v-slot:footer>
    							<checkbox-group @change="onCheckboxChange">
    								<checkbox :value="item" />
    								<text></text>
    							</checkbox-group>
    						</template>
    					</uni-list-item>
    				</uni-list>
    				<uni-list-item>
    					<template v-slot:body>
    						<button @click="onPopupConfirm" class="button" type="default">确定</button>
    					</template>
    				</uni-list-item>
    			</view>
    		</uni-popup>
  </view>
</template>

<style lang="scss" scoped>
.except-page {
  display: flex;
  flex-direction: column;
  background-color: $uni-bg-color;
  height: calc(100vh - 44px);
  box-sizing: border-box;
  padding: 30rpx 30rpx env(safe-area-inset-bottom);
}

.picker-value {
  width: 360rpx;
  color: #818181;
  text-align: right;
  font-size: 32rpx;
}
::v-deep .uni-list-item__extra-text {
  width: 360rpx;
  color: #818181;
  text-align: right;
  font-size: 32rpx;
}

.scroll-view-wrapper {
  background-color: #fff;
  border-radius: 20rpx;
  padding: 20rpx;
}
</style>
