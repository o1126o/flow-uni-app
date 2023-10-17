"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./utils/utils.js");
const global_index = require("./global/index.js");
require("./global/register-pinia.js");
require("./stores/persist.js");
if (!Math) {
  "./pages/task/index.js";
  "./pages/login/index.js";
  "./pages/message/index.js";
  "./pages/my/index.js";
  "./subpkg_user/truck/index.js";
  "./subpkg_user/task/index.js";
  "./subpkg_user/settings/index.js";
  "./subpkg_user/notify/index.js";
  "./subpkg_user/mobile/index.js";
  "./subpkg_user/password/index.js";
  "./subpkg_message/content/index.js";
  "./subpkg_task/detail/index.js";
  "./subpkg_task/delay/index.js";
  "./subpkg_task/pickup/index.js";
  "./subpkg_task/delivery/index.js";
  "./subpkg_task/record/index.js";
  "./subpkg_task/except/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/大实训/10.7神领物流/uni-flow/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(global_index.globalRegister);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
