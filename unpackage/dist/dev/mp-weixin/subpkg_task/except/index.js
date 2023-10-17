"use strict";
const common_vendor = require("../../common/vendor.js");
const api_task = require("../../api/task.js");
require("../../api/uni-fetch.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_datetime_picker2 + _easycom_uni_list_item2 + _easycom_uni_file_picker2 + _easycom_uni_list2 + _easycom_uni_popup2)();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_datetime_picker + _easycom_uni_list_item + _easycom_uni_file_picker + _easycom_uni_list + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const transportTaskId = common_vendor.ref("");
    common_vendor.onLoad((query) => {
      transportTaskId.value = query.transportTaskId;
    });
    const exceptionPicker = common_vendor.ref("");
    const exceptionTime = common_vendor.computed(() => {
      return exceptionPicker.value || "请选择";
    });
    const exceptionPlace = common_vendor.ref("");
    const onLocationChoose = async () => {
      const { address } = await common_vendor.index.chooseLocation({});
      console.log("address", address);
      exceptionPlace.value = address;
    };
    const exceptionType = common_vendor.ref("");
    const popup = common_vendor.ref("popup");
    const exceptionTypes = ["发动机启动困难", "不着车，漏油", "照明失灵", "排烟异常、温度异常", "其他问题"];
    const openPopup = () => {
      popup.value.open();
    };
    const tempException = [];
    const onCheckboxChange = (e) => {
      tempException.push(e.detail.value[0]);
      console.log("tempException", tempException);
    };
    const onPopupConfirm = () => {
      popup.value.close();
      exceptionType.value = tempException.join("|");
    };
    const exceptionDescribe = common_vendor.ref("");
    const exceptionPictures = common_vendor.ref([]);
    const exceptionImagesList = common_vendor.computed(() => {
      return exceptionPictures.value.map((item) => {
        return {
          url: item.url
        };
      });
    });
    const onSubmitForm = async () => {
      try {
        const data = {
          transportTaskId: transportTaskId.value,
          exceptionTime: exceptionTime.value,
          exceptionPlace: exceptionPlace.value,
          exceptionType: exceptionType.value,
          exceptionImagesList: exceptionImagesList.value
        };
        const result = await api_task.reportException(data);
        common_vendor.index.reLaunch({
          url: "/pages/task/index"
        });
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(exceptionTime)),
        b: common_vendor.o(($event) => exceptionPicker.value = $event),
        c: common_vendor.p({
          modelValue: exceptionPicker.value
        }),
        d: common_vendor.p({
          ["show-arrow"]: true,
          ["right-text"]: "请选择",
          title: "异常时间"
        }),
        e: common_vendor.o(onLocationChoose),
        f: common_vendor.p({
          ["show-arrow"]: true,
          clickable: true,
          ellipsis: "1",
          title: "上报位置",
          ["right-text"]: exceptionPlace.value || "请选择"
        }),
        g: common_vendor.o(openPopup),
        h: common_vendor.p({
          clickable: true,
          title: "异常类型",
          ["right-text"]: exceptionType.value || "请选择",
          ["show-arrow"]: true
        }),
        i: exceptionDescribe.value,
        j: common_vendor.o(($event) => exceptionDescribe.value = $event.detail.value),
        k: common_vendor.p({
          title: "异常描述"
        }),
        l: common_vendor.o(($event) => exceptionPictures.value = $event),
        m: common_vendor.p({
          ["file-extname"]: "jpg,webp,gif,png",
          limit: "3",
          modelValue: exceptionPictures.value
        }),
        n: common_vendor.p({
          title: "上传图片(最多3张)",
          direction: "column"
        }),
        o: common_vendor.p({
          border: false
        }),
        p: common_vendor.o(onSubmitForm),
        q: common_vendor.f(exceptionTypes, (item, index, i0) => {
          return {
            a: item,
            b: common_vendor.o(onCheckboxChange, index),
            c: index,
            d: "a5d326dc-10-" + i0 + ",a5d326dc-9",
            e: common_vendor.p({
              title: item
            })
          };
        }),
        r: common_vendor.o(onPopupConfirm),
        s: common_vendor.sr(popup, "a5d326dc-8", {
          "k": "popup"
        }),
        t: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a5d326dc"], ["__file", "E:/大实训/10.7神领物流/uni-flow/subpkg_task/except/index.vue"]]);
wx.createPage(MiniProgramPage);
