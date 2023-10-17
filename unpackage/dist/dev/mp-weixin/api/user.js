"use strict";
const api_uniFetch = require("./uni-fetch.js");
const login = (data) => {
  if (!data.account || !data.password)
    return;
  return api_uniFetch.uniFetch.post("/driver/login/account", data);
};
const userApi = () => api_uniFetch.uniFetch.get("/driver/users");
const userTask = (year, month) => api_uniFetch.uniFetch.get("/driver/users/taskReport", { year, month });
const userTruck = () => api_uniFetch.uniFetch.get("/driver/users/truck");
exports.login = login;
exports.userApi = userApi;
exports.userTask = userTask;
exports.userTruck = userTruck;
