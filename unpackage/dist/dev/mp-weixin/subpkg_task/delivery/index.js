"use strict";
const common_vendor = require("../../common/vendor.js");
const api_task = require("../../api/task.js");
require("../../api/uni-fetch.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const id = common_vendor.ref("");
    common_vendor.onLoad((query) => {
      id.value = query.id;
    });
    const receiptPictrues = common_vendor.ref([]);
    const goodsPictrues = common_vendor.ref([]);
    const deliverPictureList = common_vendor.computed(() => {
      return receiptPictrues.value.map((item) => {
        return {
          url: item.url
        };
      });
    });
    const certificatePictureList = common_vendor.computed(() => {
      return goodsPictrues.value.map((item) => {
        return {
          url: item.url
        };
      });
    });
    const enableSubmit = common_vendor.computed(() => {
      return deliverPictureList.value.length > 0 && certificatePictureList.value.length > 0;
    });
    console.log("enableSubmit=>", enableSubmit.value);
    console.log("deliverPictureList=>", deliverPictureList.value);
    console.log("certificatePictureList=>", certificatePictureList.value);
    const onSubmitForm = async () => {
      try {
        const data = {
          id: id.value,
          deliverPictureList: deliverPictureList.value,
          certificatePictureList: certificatePictureList.value
        };
        const result = await api_task.deliver(data);
        common_vendor.index.reLaunch({
          url: "/pages/task/index"
        });
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => receiptPictrues.value = $event),
        b: common_vendor.p({
          fileMediatype: "image",
          ["file-extname"]: "jpg,webp,gif,png",
          title: "请拍照上传回单凭证",
          limit: "3",
          modelValue: receiptPictrues.value
        }),
        c: common_vendor.o(($event) => goodsPictrues.value = $event),
        d: common_vendor.p({
          fileMediatype: "image",
          ["file-extname"]: "jpg,webp,gif,png",
          title: "请拍照上传回单凭证",
          limit: "3",
          modelValue: goodsPictrues.value
        }),
        e: common_vendor.o(onSubmitForm),
        f: !common_vendor.unref(enableSubmit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ba7dac0d"], ["__file", "E:/大实训/10.7神领物流/uni-flow/subpkg_task/delivery/index.vue"]]);
wx.createPage(MiniProgramPage);
