"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_task = require("../../../api/task.js");
require("../../../api/uni-fetch.js");
require("../../../stores/user.js");
const _sfc_main = {
  __name: "Delivery",
  setup(__props) {
    const tasksList = common_vendor.ref([]);
    const requestParams = common_vendor.ref({
      // 页码
      page: 0,
      // 条数
      pageSize: 5,
      //作业状态，1为待提货）、2为在途(在途和已交付)、3为改派、5为已作废、6为已完成（已回车登记）
      status: 2
    });
    const isEmpty = common_vendor.ref(false);
    const hasMore = common_vendor.ref(false);
    const isTriggered = common_vendor.ref(false);
    const getTasksList = async () => {
      requestParams.value.page += 1;
      const res = await api_task.getTasks(requestParams.value);
      if (requestParams.value.page === 1)
        tasksList.value = [];
      tasksList.value = [...tasksList.value, ...res.data.items || []];
      hasMore.value = requestParams.value.page == res.data.pages;
      isEmpty.value = tasksList.value.length === 0;
    };
    common_vendor.onLoad(() => {
      getTasksList();
    });
    const onScrollToLower = () => {
      if (hasMore.value)
        return;
      getTasksList();
    };
    const onRefresh = async () => {
      isTriggered.value = true;
      requestParams.value.page = 0;
      await getTasksList();
      isTriggered.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(tasksList.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.transportTaskId),
            b: common_vendor.t(item.startAddress),
            c: common_vendor.t(item.endAddress),
            d: `/subpkg_task/detail/index?id=${item.id}`,
            e: common_vendor.t(item.planDepartureTime),
            f: item.status === 2
          }, item.status === 2 ? {
            g: `/subpkg_task/delivery/index?id=${item.id}`
          } : {}, {
            h: item.status === 4
          }, item.status === 4 ? {
            i: `/subpkg_task/record/index?id=${item.id}`
          } : {}, {
            j: index
          });
        }),
        b: hasMore.value
      }, hasMore.value ? {} : {}, {
        c: isEmpty.value
      }, isEmpty.value ? {} : {}, {
        d: isTriggered.value,
        e: common_vendor.o(onRefresh),
        f: common_vendor.o(onScrollToLower)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-754e2c06"], ["__file", "E:/大实训/10.7神领物流/uni-flow/pages/task/components/Delivery.vue"]]);
wx.createComponent(Component);
