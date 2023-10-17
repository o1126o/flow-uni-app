"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_datetime_picker + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "出车时间",
      ["show-arrow"]: true
    }),
    b: common_vendor.t(_ctx.recordData.endTime || "请选择"),
    c: common_vendor.o(($event) => _ctx.recordData.endTime = $event),
    d: common_vendor.p({
      modelValue: _ctx.recordData.endTime
    }),
    e: common_vendor.p({
      title: "回车时间",
      ["show-arrow"]: true
    }),
    f: common_vendor.o((...args) => _ctx.onFormSubmit && _ctx.onFormSubmit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c61f3fc5"], ["__file", "E:/大实训/10.7神领物流/uni-flow/subpkg_task/record/index.vue"]]);
wx.createPage(MiniProgramPage);
