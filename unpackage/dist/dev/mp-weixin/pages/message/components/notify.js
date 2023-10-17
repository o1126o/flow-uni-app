"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_message = require("../../../api/message.js");
require("../../../api/uni-fetch.js");
require("../../../stores/user.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "notify",
  setup(__props) {
    const nextPage = common_vendor.ref(0);
    const pageSize = common_vendor.ref(5);
    const notifyList = common_vendor.ref([]);
    const isEmpty = common_vendor.ref(false);
    const hasMore = common_vendor.ref(false);
    const isTriggered = common_vendor.ref(false);
    const contentType = common_vendor.ref("201");
    const getNotifyList = async () => {
      nextPage.value += 1;
      const res = await api_message.getMessage(contentType.value, nextPage.value, pageSize.value);
      if (nextPage.value === 1)
        notifyList.value = [];
      notifyList.value = [...notifyList.value, ...res.data.items || []];
      hasMore.value = nextPage.value == res.data.pages;
      isEmpty.value = notifyList.value.length === 0;
    };
    common_vendor.onMounted(() => {
      getNotifyList();
    });
    const onScrollToLower = () => {
      if (hasMore.value)
        return;
      getNotifyList();
    };
    const onRefresh = async () => {
      isTriggered.value = true;
      nextPage.value = 0;
      await getNotifyList();
      isTriggered.value = false;
    };
    const handleAllOk = async () => {
      try {
        const result = await api_message.getReadAll(contentType.value);
        nextPage.value = 0;
        getNotifyList();
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: notifyList.value.length > 0
      }, notifyList.value.length > 0 ? common_vendor.e({
        b: common_vendor.o(handleAllOk),
        c: common_vendor.f(notifyList.value, (notify, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(notify.content),
            b: common_vendor.t(notify.created),
            c: `/subpkg_task/detail/index?id=${notify.id}`,
            d: notify.isRead === 0
          }, notify.isRead === 0 ? {} : {}, {
            e: !notify.isRead ? 1 : "",
            f: notify.id,
            g: "a904c968-0-" + i0
          });
        }),
        d: common_vendor.p({
          border: false,
          ["is-shadow"]: false
        }),
        e: hasMore.value
      }, hasMore.value ? {} : {}, {
        f: isEmpty.value
      }, isEmpty.value ? {} : {}) : {}, {
        g: isTriggered.value,
        h: common_vendor.o(onRefresh),
        i: common_vendor.o(onScrollToLower)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a904c968"], ["__file", "E:/大实训/10.7神领物流/uni-flow/pages/message/components/notify.vue"]]);
wx.createComponent(Component);
