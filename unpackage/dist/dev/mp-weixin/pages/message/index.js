"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(Announce) + common_vendor.unref(Notify))();
}
const Announce = () => "./components/announce.js";
const Notify = () => "./components/notify.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabIndex = common_vendor.ref(0);
    const tabList = common_vendor.reactive([
      {
        title: "公告",
        rendered: true
      },
      {
        title: "任务通知",
        rendered: false
      }
    ]);
    const onTabChange = (index) => {
      tabList[index].rendered = true;
      tabIndex.value = index;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(tabList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: tabIndex.value === index ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => onTabChange(index), index)
          };
        }),
        b: tabList[0].rendered
      }, tabList[0].rendered ? {
        c: tabIndex.value === 0
      } : {}, {
        d: tabList[1].rendered
      }, tabList[1].rendered ? {
        e: tabIndex.value === 1
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/大实训/10.7神领物流/uni-flow/pages/message/index.vue"]]);
wx.createPage(MiniProgramPage);
