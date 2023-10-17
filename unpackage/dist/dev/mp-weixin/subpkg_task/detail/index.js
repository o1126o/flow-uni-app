"use strict";
const common_vendor = require("../../common/vendor.js");
const api_task = require("../../api/task.js");
require("../../api/uni-fetch.js");
require("../../stores/user.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const id = common_vendor.ref("");
    const taskDetail = common_vendor.ref({});
    common_vendor.onLoad((params) => {
      getTaskDetail(id.value = params.id);
    });
    const getTaskDetail = async (id2) => {
      if (!id2)
        return;
      const res = await api_task.taskDetailApi(id2);
      taskDetail.value = res.data;
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.t(taskDetail.value.startAddress),
        b: common_vendor.t(taskDetail.value.endAddress),
        c: common_vendor.t(taskDetail.value.transportTaskId),
        d: taskDetail.value.status >= 1
      }, taskDetail.value.status >= 1 ? {
        e: common_vendor.t(taskDetail.value.startHandoverName),
        f: common_vendor.t(taskDetail.value.startHandoverPhone),
        g: common_vendor.t(taskDetail.value.planDepartureTime),
        h: common_vendor.t(taskDetail.value.actualDepartureTime)
      } : {}, {
        i: taskDetail.value.status >= 2
      }, taskDetail.value.status >= 2 ? {
        j: common_vendor.t(taskDetail.value.finishHandoverName),
        k: common_vendor.t(taskDetail.value.finishHandoverPhone),
        l: common_vendor.t(taskDetail.value.planArrivalTime),
        m: common_vendor.t(taskDetail.value.actualArrivalTime)
      } : {}, {
        n: (_a = taskDetail.value.exceptionList) == null ? void 0 : _a.length
      }, ((_b = taskDetail.value.exceptionList) == null ? void 0 : _b.length) ? {
        o: common_vendor.f(taskDetail.value.exceptionList, (exception, k0, i0) => {
          return {
            a: common_vendor.t(exception.exceptionTime),
            b: common_vendor.t(exception.exceptionType),
            c: common_vendor.t(exception.handleResult),
            d: exception.exceptionType
          };
        })
      } : {}, {
        p: taskDetail.value.status === 2
      }, taskDetail.value.status === 2 ? common_vendor.e({
        q: common_vendor.f(taskDetail.value.cargoPictureList, (receipt, k0, i0) => {
          return {
            a: receipt.url,
            b: receipt.url
          };
        })
      }, {}, {
        r: common_vendor.f(taskDetail.value.cargoPickUpPictureList, (goods, k0, i0) => {
          return {
            a: goods.url,
            b: goods.url
          };
        })
      }, {}) : {}, {
        s: taskDetail.value.status === 4 || taskDetail.value.status === 6
      }, taskDetail.value.status === 4 || taskDetail.value.status === 6 ? common_vendor.e({
        t: common_vendor.f(taskDetail.value.certificatePictureList, (certificate, k0, i0) => {
          return {
            a: certificate.url,
            b: certificate.url
          };
        })
      }, {}, {
        v: common_vendor.f(taskDetail.value.deliverPictureList, (deliver, k0, i0) => {
          return {
            a: deliver.url,
            b: deliver.url
          };
        })
      }, {}) : {}, {
        w: taskDetail.value.status === 1
      }, taskDetail.value.status === 1 ? {
        x: `/subpkg_task/delay/index?id=${taskDetail.value.id}&planDepartureTime=${taskDetail.value.planDepartureTime}`,
        y: `/subpkg_task/pickup/index?id=${taskDetail.value.id}`
      } : {}, {
        z: taskDetail.value.status === 2
      }, taskDetail.value.status === 2 ? {
        A: `/subpkg_task/except/index?transportTaskId=${taskDetail.value.transportTaskId}`,
        B: `/subpkg_task/delivery/index?id=${taskDetail.value.id}`
      } : {}, {
        C: taskDetail.value.status === 4
      }, taskDetail.value.status === 4 ? {
        D: `/subpkg_task/record/index?transportTaskId=${taskDetail.value.transportTaskId}&actualDepartureTime=${taskDetail.value.actualDepartureTime}`
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1a9e4efd"], ["__file", "E:/大实训/10.7神领物流/uni-flow/subpkg_task/detail/index.vue"]]);
wx.createPage(MiniProgramPage);
