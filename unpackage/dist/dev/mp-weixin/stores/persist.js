"use strict";
const common_vendor = require("../common/vendor.js");
const piniaPluginPersistedstate = common_vendor.createPersistedState({
  key: (id) => `__persisted__${id}`,
  storage: {
    getItem: (key) => {
      return common_vendor.index.getStorageSync(key);
    },
    setItem: (key, value) => {
      common_vendor.index.setStorageSync(key, value);
    }
  }
});
exports.piniaPluginPersistedstate = piniaPluginPersistedstate;
