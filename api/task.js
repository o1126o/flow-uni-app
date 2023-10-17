/**
 *  任务模块相关接口
 */
import uniFetch from './uni-fetch.js';

// 获取任务列表
export const getTasks = (data) => {
  return uniFetch.get('/driver/tasks/list', data);
};

// 提货
export const takeDelivery = (data) => {
  return uniFetch.post('/driver/tasks/takeDelivery', data);
};

// 交付
export const deliver = (data) => {
  return uniFetch.post('/driver/tasks/deliver', data);
};

// 任务详情
export const taskDetailApi = (id) => {
  return uniFetch.get(`/driver/tasks/details/${id}`);
};

// 延迟提货
export const takeDelay = (data) => {
  return uniFetch.put('/driver/tasks/delay', data);
};

// 联系调v度中心

// 条件查询货物信息列表

// 回车登记
// 回车登记
export const truckRegistration = (data) => {
	return uniFetch.post('/driver/tasks/truckRegistration', data);
};

// 上报异常 
export const reportException = () => {
  return uniFetch.post('/driver/tasks/reportException', data);
}

// // 图片上传 /driver/files/imageUpload
// export const imageUploadApi = (data) => {
//   return uniFetch.post('/driver/tasks/delay', data);
// };