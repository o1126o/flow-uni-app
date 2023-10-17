"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
require("../../api/uni-fetch.js");
require("../../stores/user.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userTruckInfo = common_vendor.ref({});
    common_vendor.onLoad(() => {
      getTruckInfo();
    });
    const getTruckInfo = async () => {
      try {
        const res = await api_user.userTruck();
        console.log(res, "111");
        userTruckInfo.value = res.data;
      } catch (err) {
        console.log(err);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(userTruckInfo.value.pictureList, (i, k0, i0) => {
          return {
            a: i.url
          };
        }),
        b: common_vendor.t(userTruckInfo.value.id),
        c: common_vendor.t(userTruckInfo.value.licensePlate),
        d: common_vendor.t(userTruckInfo.value.truckType),
        e: common_vendor.t(userTruckInfo.value.currentOrganName),
        f: common_vendor.t(userTruckInfo.value.allowableLoad)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a5f3e2cd"], ["__file", "E:/大实训/10.7神领物流/uni-flow/subpkg_user/truck/index.vue"]]);
wx.createPage(MiniProgramPage);
