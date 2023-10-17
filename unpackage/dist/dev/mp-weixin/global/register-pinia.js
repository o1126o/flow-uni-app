"use strict";
const common_vendor = require("../common/vendor.js");
const stores_persist = require("../stores/persist.js");
const pinia = common_vendor.createPinia();
function registerPinia(app) {
  pinia.use(stores_persist.piniaPluginPersistedstate);
  app.use(pinia);
}
exports.registerPinia = registerPinia;
