"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const checValue = common_vendor.ref(false);
    const handleChange = () => {
      checValue.value = !checValue.value;
    };
    return (_ctx, _cache) => {
      return {
        a: checValue.value,
        b: common_vendor.o(handleChange),
        c: common_vendor.p({
          title: "允许给我推送任务通知"
        }),
        d: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a0715e8"], ["__file", "E:/大实训/10.7神领物流/uni-flow/subpkg_user/notify/index.vue"]]);
wx.createPage(MiniProgramPage);
