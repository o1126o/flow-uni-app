<script setup>
import { ref } from 'vue';
import VehicleOptions from './VehicleOptions.vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/task.js';
const { recordData } = storeToRefs(useTaskStore());

// 控制选项显示还是隐藏
const show = ref(false);

// 监听单选框的切换
const onRadioChange = (e) => {
	show.value = e.detail.value == 1 ? true : false;
	recordData.value.isAccident = show.value;
};

// 事故类型
const types = ref([
	{ id: 1, text: '直行事故' },
	{ id: 2, text: '追尾事故' },
	{ id: 3, text: '超车事故' },
	{ id: 4, text: '左转弯事故' },
	{ id: 5, text: '右转弯事故' },
	{ id: 6, text: '弯道事故' },
	{ id: 7, text: '坡道事故' },
	{ id: 8, text: '会车事故' },
	{ id: 9, text: '其他' }
]);
</script>
<template>
	<view class="vehicle-panel">
		<view class="vehicle-panel-header">
			<uni-list>
				<uni-list-item title="交通事故">
					<template v-slot:footer>
						<radio-group class="radio-group" @change="onRadioChange">
							<label class="radio">
								<radio value="1" color="#e74531" />
								<text>是</text>
							</label>
							<label class="radio">
								<radio checked value="0" color="#e74531" />
								<text>否</text>
							</label>
						</radio-group>
					</template>
				</uni-list-item>
			</uni-list>
		</view>
		<view v-show="show" class="vehicle-panel-body">
			<uni-list>
				<uni-list-item direction="column" title="事故类型">
					<template v-slot:footer>
						<VehicleOptions dataKey="accidentType" :types="types"></VehicleOptions>
					</template>
				</uni-list-item>
				<uni-list-item v-if="recordData.accidentType === 9">
					<template v-slot:footer>
						<textarea v-model="recordData.accidentDescription" placeholder="请输入事故描述" />
					</template>
				</uni-list-item>
				<uni-list-item direction="column" title="请上传事故现场照片">
					<template v-slot:footer>
						<uni-file-picker v-model="recordData.accidentImagesList"></uni-file-picker>
					</template>
				</uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<style lang="scss" scoped>
  .vehicle-panel {
    border-radius: 16rpx;
    overflow: hidden;
    margin-bottom: 30rpx !important;
  }
  .uni-list {
    padding: 0 30rpx;
  }
  .vehicle-panel {
    margin-top: 30rpx;
  }
  .radio-group {
    width: 230rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28rpx;
    color: #818181;
  }
  ::v-deep .uni-radio-input {
    width: 35rpx;
    height: 35rpx;
  }
</style>