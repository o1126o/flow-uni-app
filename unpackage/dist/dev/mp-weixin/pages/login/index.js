"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (Account + Mobile)();
}
const Account = () => "./components/account.js";
const Mobile = () => "./components/Mobile.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabMetas = common_vendor.ref([
      {
        title: "账号登录",
        subTitle: "手机号登陆"
      },
      {
        title: "手机号登陆",
        subTitle: "账号登录"
      }
    ]);
    const tabIndex = common_vendor.ref(0);
    const changeLoginType = () => {
      tabIndex.value = Math.abs(tabIndex.value - 1);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(tabMetas.value[tabIndex.value].title),
        b: common_vendor.t(tabMetas.value[tabIndex.value].subTitle),
        c: common_vendor.o(changeLoginType),
        d: tabIndex.value === 0
      }, tabIndex.value === 0 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/大实训/10.7神领物流/uni-flow/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
