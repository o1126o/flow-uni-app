"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
require("../../api/uni-fetch.js");
require("../../stores/user.js");
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
    common_vendor.onLoad(() => {
      getUserProfile();
      getTaskInfo();
    });
    const userProfile = common_vendor.ref({});
    const taskInfo = common_vendor.ref({});
    const getUserProfile = async () => {
      try {
        const res = await api_user.userApi();
        userProfile.value = res.data;
      } catch (err) {
        console.log(err);
      }
    };
    const getTaskInfo = async () => {
      try {
        const res = await api_user.userTask("2023", "10");
        taskInfo.value = res.data;
      } catch (err) {
        console.log(err);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: userProfile.value.avatar,
        b: common_vendor.t(userProfile.value.name),
        c: common_vendor.t(userProfile.value.number),
        d: common_vendor.t(userProfile.value.phone),
        e: common_vendor.t(taskInfo.value.taskAmounts),
        f: common_vendor.t(taskInfo.value.completedAmounts),
        g: common_vendor.t(taskInfo.value.transportMileage),
        h: common_vendor.p({
          to: "/subpkg_user/truck/index",
          showArrow: true,
          title: "车辆信息"
        }),
        i: common_vendor.p({
          to: "/subpkg_user/task/index",
          showArrow: true,
          title: "任务数据"
        }),
        j: common_vendor.p({
          to: "/subpkg_user/settings/index",
          showArrow: true,
          title: "系统设置"
        }),
        k: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f97bc692"], ["__file", "E:/大实训/10.7神领物流/uni-flow/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
