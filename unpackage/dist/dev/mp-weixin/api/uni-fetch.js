"use strict";
const common_vendor = require("../common/vendor.js");
const stores_user = require("../stores/user.js");
const tabBarPagePaths = ["pages/task/index", "pages/message/index", "pages/my/index"];
const uniFetch = common_vendor.createUniFetch_1({
  // loading加载
  loading: {
    title: "加载中..."
  },
  // baseURL: 'https://slwl-api.itheima.net',
  baseURL: "/dev-api",
  intercept: {
    // 请求拦截器
    request(options) {
      const store = stores_user.useUserStore();
      const defaultHeader = {
        Authorization: store.token
      };
      options.header = Object.assign({}, defaultHeader, options.header);
      return options;
    },
    // 响应拦截器
    response(result) {
      if (result.statusCode === 200 && result.data.code === 200) {
        return result.data;
      }
      if (result.statusCode === 401) {
        const pageStack = getCurrentPages();
        console.log("pageStack=>", pageStack);
        const redirectUrl = pageStack[pageStack.length - 1].route;
        const routeType = tabBarPagePaths.includes(redirectUrl) ? "switchTab" : "redirectTo";
        return common_vendor.index.redirectTo({
          url: `/pages/login/index?routeType=${routeType}&redirectUrl=/${redirectUrl}`
        });
      }
      common_vendor.index.utils.toast(result.data.msg || "请求失败");
    }
  }
});
exports.uniFetch = uniFetch;
