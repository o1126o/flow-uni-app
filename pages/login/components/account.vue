<script setup>
import { ref } from 'vue';
import { login } from '@/api/user.js';
import { useUserStore } from '@/stores/user.js';
import { onLoad } from '@dcloudio/uni-app';

const store = useUserStore();
const accountForm = ref();

// 回调地址
const redirectUrl = ref('');
// 跳转地址方式
const routeType = ref('');

const formData = ref({
  account: '',
  password: ''
});

onLoad((e) => {
  redirectUrl.value = e.redirectUrl;
  routeType.value = e.routeType;
});

const accountRules = ref({
  account: {
    rules: [
      {
        required: true,
        errorMessage: '请输入登录账号'
      },
      {
        pattern: /^[a-zA-Z0-9]{6,8}$/,
        errorMessage: '登录账号格式不正确'
      }
    ]
  },
  password: {
    rules: [
      {
        required: true,
        errorMessage: '请输入登录密码'
      },
      {
        pattern: /^\d{6}$/,
        errorMessage: '登录密码格式不正确'
      }
    ]
  }
});

// 登录
const submitForm = async () => {
  try {
    // 调用表单校验
    const formData = await accountForm.value.validate();
    // 调用登录接口
    const res = await login(formData);
    // 存储token
    store.token = res.data;
    // 地址重定向或switchTab
    if (routeType.value === 'switchTab') {
      uni.switchTab({ url: redirectUrl.value });
    } else if (routeType.value === 'redirectTo') {
      uni.redirectTo({ url: redirectUrl.value });
    } else {
      uni.switchTab({
        url: '/pages/my/index'
      });
    }
  } catch (e) {
    // 验证失败
    console.log('e', e);
  }
};

const showClearIcon = ref(false);
const clearInput = (e) => {
  if (e.detail.value.length > 0) {
    showClearIcon.value = true;
  } else {
    showClearIcon.value = false;
  }
};
const clearIcon = () => {
  formData.value.password = '';
  showClearIcon.value = false;
};
</script>
<template>
  <uni-forms ref="accountForm" :rules="accountRules" class="uni-form" :modelValue="formData">
    <uni-forms-item name="account">
      <input placeholder-style="color: #818181" type="text" v-model="formData.account" placeholder="请输入账号" />
    </uni-forms-item>
    <uni-forms-item name="password">
      <input placeholder-style="color: #818181" type="password" v-model="formData.password" placeholder="请输入密码" @input="clearInput" />
      <text class="iconfont icon-clear" v-if="showClearIcon" @click="clearIcon"></text>
    </uni-forms-item>
  </uni-forms>
  <button @click="submitForm" class="submit-button">登录</button>
</template>

<style lang="scss">
.submit-button {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  border: none;
  background: $uni-main-color;
  border-radius: 49.54rpx;
  margin-top: 80rpx;
  font-size: $uni-font-size-big;
  color: $uni-white-color;
}
.uni-forms-item {
  height: 100rpx;
  margin-bottom: 20 !important;
  border-bottom: 2rpx solid $uni-divider-color;
  box-sizing: border-box;

  ::v-deep .uni-forms-item__content {
    display: flex;
    align-items: center;
  }

  ::v-deep input {
    width: 100%;
    font-size: $uni-font-size-base;
    color: $uni-secondary-text-color;
  }
}
::v-deep .uni-forms-item__error {
  width: 100%;
  padding-top: 10rpx;
  border-top: 2rpx solid $uni-main-color;
  color: $uni-main-color;
  font-size: $uni-font-size-small;
  transition: none;
}

.disabled {
  background-color: #fadcd9;
  color: $uni-white-color;
}
</style>
