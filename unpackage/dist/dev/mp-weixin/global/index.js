"use strict";
const global_registerPinia = require("./register-pinia.js");
const globalRegister = {
  install(app) {
    app.use(global_registerPinia.registerPinia);
  }
};
exports.globalRegister = globalRegister;
