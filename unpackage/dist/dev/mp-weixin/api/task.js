"use strict";
const api_uniFetch = require("./uni-fetch.js");
const getTasks = (data2) => {
  return api_uniFetch.uniFetch.get("/driver/tasks/list", data2);
};
const takeDelivery = (data2) => {
  return api_uniFetch.uniFetch.post("/driver/tasks/takeDelivery", data2);
};
const deliver = (data2) => {
  return api_uniFetch.uniFetch.post("/driver/tasks/deliver", data2);
};
const taskDetailApi = (id) => {
  return api_uniFetch.uniFetch.get(`/driver/tasks/details/${id}`);
};
const takeDelay = (data2) => {
  return api_uniFetch.uniFetch.put("/driver/tasks/delay", data2);
};
const reportException = () => {
  return api_uniFetch.uniFetch.post("/driver/tasks/reportException", data);
};
exports.deliver = deliver;
exports.getTasks = getTasks;
exports.reportException = reportException;
exports.takeDelay = takeDelay;
exports.takeDelivery = takeDelivery;
exports.taskDetailApi = taskDetailApi;
