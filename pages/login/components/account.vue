<script setup>
import { ref } from 'vue';
import { login } from '@/api/user.js';
import { useUserStore } from '@/stores/user.js';

const store = useUserStore();
const accountForm = ref();

const formData = ref({
  account: '',
  password: ''
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
  background: #ef4f3f;
  border-radius: 49.54rpx;
  margin-top: 80rpx;
  font-size: 36rpx;
  color: #fff;
}
.uni-forms-item {
  height: 100rpx;
  margin-bottom: 20 !important;
  border-bottom: 2rpx solid #eee;
  box-sizing: border-box;

  ::v-deep .uni-forms-item__content {
    display: flex;
    align-items: center;
  }

  ::v-deep input {
    width: 100%;
    font-size: 32rpx;
    color: #818181;
  }
}
::v-deep .uni-forms-item__error {
  width: 100%;
  padding-top: 10rpx;
  border-top: 2rpx solid #ef4f3f;
  color: ef4f3f;
  font-size: 28rpx;
  transition: none;
}

.disabled {
  background-color: #fadcd9;
  color: #ffffff;
}
</style>
