/**
 *  登录模块相关接口
 */
import uniFetch from './uni-fetch.js';

// 用户登录
export const login = (data) => {
  if (!data.account || !data.password) return;
  return uniFetch.post('/driver/login/account', data);
};

// 用户数据
export const userApi = () => uniFetch.get('/driver/users')

// 任务数据
export const userTask = (year, month) => uniFetch.get('/driver/users/taskReport', { year, month })

// 车辆信息
export const userTruck = () => uniFetch.get('/driver/users/truck')