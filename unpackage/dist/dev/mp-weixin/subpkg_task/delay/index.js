"use strict";
const common_vendor = require("../../common/vendor.js");
const api_task = require("../../api/task.js");
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
    const planDepartureTime = common_vendor.ref("");
    const id = common_vendor.ref("");
    common_vendor.onLoad((query) => {
      planDepartureTime.value = query.planDepartureTime;
      id.value = query.id;
    });
    const delayTime = common_vendor.ref("");
    const onPickerChange = (e) => {
      console.log("e=>", e);
      const [date] = planDepartureTime.value.split(" ");
      delayTime.value = `${date} ${e.detail.value}`;
    };
    const delayTimeValid = common_vendor.computed(() => {
      const start = new Date(planDepartureTime.value);
      const end = new Date(delayTime.value);
      return end - start > 0 && end - start < 7200 * 1e3;
    });
    const wordsCount = common_vendor.computed(() => delayReason.value.length);
    const delayReason = common_vendor.ref("");
    const delayReasonValid = common_vendor.computed(() => {
      return wordsCount.value <= 50 && wordsCount.value > 0;
    });
    const enableSubmit = common_vendor.computed(() => {
      return !delayReasonValid.value || !delayTimeValid.value;
    });
    console.log("enableSubmit=>", enableSubmit);
    const onSubmitForm = async () => {
      const formData = {
        id: id.value,
        delayTime: delayTime.value,
        delayReason: delayReason.value
      };
      await api_task.takeDelay(formData);
      common_vendor.index.reLaunch({ url: "/pages/task/index" });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "原定时间",
          ["right-text"]: planDepartureTime.value
        }),
        b: !delayTime.value
      }, !delayTime.value ? {} : {
        c: common_vendor.t(delayTime.value + ":00"),
        d: !common_vendor.unref(delayTimeValid) ? 1 : ""
      }, {
        e: common_vendor.o(onPickerChange),
        f: common_vendor.p({
          title: "延迟时间",
          showArrow: true
        }),
        g: delayReason.value,
        h: common_vendor.o(($event) => delayReason.value = $event.detail.value),
        i: common_vendor.t(common_vendor.unref(wordsCount)),
        j: common_vendor.unref(wordsCount) > 50 ? 1 : "",
        k: common_vendor.p({
          direction: "column"
        }),
        l: common_vendor.o(onSubmitForm),
        m: common_vendor.unref(enableSubmit),
        n: common_vendor.p({
          border: false
        }),
        o: common_vendor.p({
          border: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fecb005a"], ["__file", "E:/大实训/10.7神领物流/uni-flow/subpkg_task/delay/index.vue"]]);
wx.createPage(MiniProgramPage);
