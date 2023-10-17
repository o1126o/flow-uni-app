"use strict";
const common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore(
  "user",
  () => {
    const token = common_vendor.ref("");
    const loyout = () => {
      token.value = "";
    };
    return { token, loyout };
  },
  {
    persist: true
  }
);
exports.useUserStore = useUserStore;
