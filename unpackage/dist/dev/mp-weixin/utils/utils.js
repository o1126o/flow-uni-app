"use strict";
const common_vendor = require("../common/vendor.js");
const utils = {
  /**
   * 用户反馈（轻提示）
   * title 提示文字内容
   * icon 提示图标类型
   */
  toast(title = "", icon = "none") {
    common_vendor.index.showToast({
      title,
      icon,
      mask: true
    });
  },
  // 获取年月日
  getYearAndMonth() {
    const date = /* @__PURE__ */ new Date();
    const year = data.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    return { year, month };
  }
};
common_vendor.index.utils = utils;
