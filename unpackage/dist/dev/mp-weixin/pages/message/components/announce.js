"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_message = require("../../../api/message.js");
require("../../../api/uni-fetch.js");
require("../../../stores/user.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "announce",
  setup(__props) {
    const nextPage = common_vendor.ref(0);
    const pageSize = common_vendor.ref(5);
    const getMsgList = common_vendor.ref([]);
    const isEmpty = common_vendor.ref(false);
    const hasMore = common_vendor.ref(false);
    const isTriggered = common_vendor.ref(false);
    const contentType = common_vendor.ref("200");
    const getAnnounceList = async () => {
      nextPage.value += 1;
      const res = await api_message.getMessage(contentType.value, nextPage.value, pageSize.value);
      if (nextPage.value === 1)
        getMsgList.value = [];
      getMsgList.value = [...getMsgList.value, ...res.data.items || []];
      hasMore.value = nextPage.value == res.data.pages;
      isEmpty.value = getMsgList.value.length === 0;
    };
    common_vendor.onMounted(() => {
      getAnnounceList();
    });
    const onScrollToLower = () => {
      if (hasMore.value)
        return;
      getAnnounceList();
    };
    const onRefresh = async () => {
      isTriggered.value = true;
      nextPage.value = 0;
      await getAnnounceList();
      isTriggered.value = false;
    };
    const handleAllOk = async () => {
      try {
        const result = await api_message.getReadAll(contentType.value);
        nextPage.value = 0;
        getAnnounceList();
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: getMsgList.value.length > 0
      }, getMsgList.value.length > 0 ? common_vendor.e({
        b: common_vendor.o(handleAllOk),
        c: common_vendor.f(getMsgList.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.isRead === 0
          }, item.isRead === 0 ? {} : {}, {
            b: item.id,
            c: "4b861c49-1-" + i0 + ",4b861c49-0",
            d: common_vendor.p({
              title: item.title,
              ["right-text"]: item.created,
              ellipsis: "1",
              to: `/subpkg_message/content/index?id=${item.id}`
            })
          });
        }),
        d: isEmpty.value
      }, isEmpty.value ? {} : {}) : {}, {
        e: isTriggered.value,
        f: common_vendor.o(onRefresh),
        g: common_vendor.o(onScrollToLower)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4b861c49"], ["__file", "E:/大实训/10.7神领物流/uni-flow/pages/message/components/announce.vue"]]);
wx.createComponent(Component);
