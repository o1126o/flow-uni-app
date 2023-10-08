/**
 *  登录模块相关接口
 */
import uniFetch from './uni-fetch.js';

// 用户登录
export const login = (data) => {
	return uniFetch({ url: '/driver/login/account', method: 'POST', data });
};