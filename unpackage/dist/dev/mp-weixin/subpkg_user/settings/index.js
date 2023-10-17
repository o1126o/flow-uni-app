"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_user = require("../../stores/user.js");
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
    const store = stores_user.useUserStore();
    const handleClean = () => {
      common_vendor.index.showModal({
        title: "清理缓存后会清空所有数据",
        success: function(res) {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "清除成功",
              icon: "none",
              duration: 600
            });
          } else if (res.cancel) {
            common_vendor.index.showToast({
              title: "取消成功",
              icon: "none",
              duration: 300
            });
          }
        }
      });
    };
    const handleLoyout = () => {
      common_vendor.index.showModal({
        title: "确定要退出登录",
        success: function(res) {
          if (res.confirm) {
            store.loyout();
            common_vendor.index.reLaunch({ url: "/pages/login/index" });
          } else if (res.cancel) {
            common_vendor.index.showToast({
              title: "已取消",
              icon: "none",
              duration: 300
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "换绑手机",
          to: "/subpkg_user/mobile/index",
          ["show-arrow"]: true
        }),
        b: common_vendor.p({
          title: "修改密码",
          to: "/subpkg_user/password/index",
          ["show-arrow"]: true
        }),
        c: common_vendor.p({
          title: "消息通知设置",
          to: "/subpkg_user/notify/index",
          ["show-arrow"]: true
        }),
        d: common_vendor.p({
          title: "修改密码",
          ["show-arrow"]: true
        }),
        e: common_vendor.o(handleClean),
        f: common_vendor.p({
          title: "清理缓存",
          link: true,
          ["show-arrow"]: true
        }),
        g: common_vendor.p({
          border: false
        }),
        h: common_vendor.o(handleLoyout)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c02aaed"], ["__file", "E:/大实训/10.7神领物流/uni-flow/subpkg_user/settings/index.vue"]]);
wx.createPage(MiniProgramPage);
