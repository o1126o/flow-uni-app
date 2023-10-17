"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_user = require("../../../api/user.js");
const stores_user = require("../../../stores/user.js");
require("../../../api/uni-fetch.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "account",
  setup(__props) {
    const store = stores_user.useUserStore();
    const accountForm = common_vendor.ref();
    const redirectUrl = common_vendor.ref("");
    const routeType = common_vendor.ref("");
    const formData = common_vendor.ref({
      account: "",
      password: ""
    });
    common_vendor.onLoad((e) => {
      redirectUrl.value = e.redirectUrl;
      routeType.value = e.routeType;
    });
    const accountRules = common_vendor.ref({
      account: {
        rules: [
          {
            required: true,
            errorMessage: "请输入登录账号"
          },
          {
            pattern: /^[a-zA-Z0-9]{6,8}$/,
            errorMessage: "登录账号格式不正确"
          }
        ]
      },
      password: {
        rules: [
          {
            required: true,
            errorMessage: "请输入登录密码"
          },
          {
            pattern: /^\d{6}$/,
            errorMessage: "登录密码格式不正确"
          }
        ]
      }
    });
    const submitForm = async () => {
      try {
        const formData2 = await accountForm.value.validate();
        const res = await api_user.login(formData2);
        store.token = res.data;
        if (routeType.value === "switchTab") {
          common_vendor.index.switchTab({ url: redirectUrl.value });
        } else if (routeType.value === "redirectTo") {
          common_vendor.index.redirectTo({ url: redirectUrl.value });
        } else {
          common_vendor.index.switchTab({
            url: "/pages/my/index"
          });
        }
      } catch (e) {
        console.log("e", e);
      }
    };
    const showClearIcon = common_vendor.ref(false);
    const clearInput = (e) => {
      if (e.detail.value.length > 0) {
        showClearIcon.value = true;
      } else {
        showClearIcon.value = false;
      }
    };
    const clearIcon = () => {
      formData.value.password = "";
      showClearIcon.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: formData.value.account,
        b: common_vendor.o(($event) => formData.value.account = $event.detail.value),
        c: common_vendor.p({
          name: "account"
        }),
        d: common_vendor.o([($event) => formData.value.password = $event.detail.value, clearInput]),
        e: formData.value.password,
        f: showClearIcon.value
      }, showClearIcon.value ? {
        g: common_vendor.o(clearIcon)
      } : {}, {
        h: common_vendor.p({
          name: "password"
        }),
        i: common_vendor.sr(accountForm, "0ef4ab12-0", {
          "k": "accountForm"
        }),
        j: common_vendor.p({
          rules: accountRules.value,
          modelValue: formData.value
        }),
        k: common_vendor.o(submitForm)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/大实训/10.7神领物流/uni-flow/pages/login/components/account.vue"]]);
wx.createComponent(Component);
