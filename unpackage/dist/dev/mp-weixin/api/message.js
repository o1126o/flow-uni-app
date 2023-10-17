"use strict";
const api_uniFetch = require("./uni-fetch.js");
const getMessage = (contentType, page = 1, pageSize = 5) => {
  return api_uniFetch.uniFetch.get("/driver/messages/page", {
    contentType,
    page,
    pageSize
  });
};
const getReadAll = (contentType) => {
  return api_uniFetch.uniFetch.put(`/driver/messages/readAll/${contentType}`);
};
exports.getMessage = getMessage;
exports.getReadAll = getReadAll;
