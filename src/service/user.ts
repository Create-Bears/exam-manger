import request from '../utils/request';

//登录接口
export let getUserLogin = (params: object) => {
	const url = '/user/login';
	return request.post(url, params);
};

//获取用户信息
export let getUserInfoUser = () => {
	const url = '/user/userInfo';
	return request.get(url);
}

//获取用户权限
export let getViewAuthority = () => {
	const url = '/user/view_authority';
	return request.get(url)
}

//更新当前用户信息
export let updateUserInfo = (data: object) => {
	const url = '/user/user';
	return request.put(url, data)
}