"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const user = common_vendor.reactive({
      mobile: "18612345678",
      code: "2468",
      password: "123456"
    });
    return (_ctx, _cache) => {
      return {
        a: user.mobile,
        b: common_vendor.o(($event) => user.mobile = $event.detail.value),
        c: common_vendor.p({
          name: "mobile"
        }),
        d: user.code,
        e: common_vendor.o(($event) => user.code = $event.detail.value),
        f: common_vendor.p({
          name: "code"
        }),
        g: user.password,
        h: common_vendor.o(($event) => user.password = $event.detail.value),
        i: common_vendor.p({
          name: "passsword"
        }),
        j: common_vendor.sr("form", "679efa91-0"),
        k: common_vendor.p({
          ["auto-complete"]: "off"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-679efa91"], ["__file", "E:/大实训/10.7神领物流/uni-flow/subpkg_user/password/index.vue"]]);
wx.createPage(MiniProgramPage);
