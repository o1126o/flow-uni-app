"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (Pickup + Delivery)();
}
const Pickup = () => "./components/Pickup.js";
const Delivery = () => "./components/Delivery.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabIndex = common_vendor.ref(0);
    const tabMetas = common_vendor.ref([
      { title: "待提货", rendered: true },
      { title: "在途", rendered: false },
      { title: "已完成", rendered: false }
    ]);
    const changeTab = (index) => {
      tabMetas.value[index].rendered = true;
      tabIndex.value = index;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(tabMetas.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: tabIndex.value === index ? 1 : "",
            c: common_vendor.o(($event) => changeTab(index), index),
            d: index
          };
        }),
        b: tabMetas.value[0].rendered
      }, tabMetas.value[0].rendered ? {
        c: tabIndex.value === 0
      } : {}, {
        d: tabMetas.value[1].rendered
      }, tabMetas.value[1].rendered ? {
        e: tabIndex.value === 1
      } : {}, {
        f: tabMetas.value[2].rendered
      }, tabMetas.value[2].rendered ? {
        g: tabIndex.value === 2
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3dabfb60"], ["__file", "E:/大实训/10.7神领物流/uni-flow/pages/task/index.vue"]]);
wx.createPage(MiniProgramPage);
