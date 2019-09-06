import request from '../utils/request'

export let getUser = () => {
    const url = '/user/user';
    return request.get(url)
}

// 这个是身份id
export let getIdentity = () => {
	const url = '/user/identity';
	return request.get(url);
};

// 这个用来身份id 人名
export let getUserId = ()=>{
    const url = '/user/user';
    return request.get(url);
}


// 这个用来api类型
export let getUserApiType = ()=>{
    const url = '/user/api_authority';
    return request.get(url);
}

// 这个返回的是api view权限关系
export let getUserApiView = ()=>{
    const url = '/user/identity_view_authority_relation';
    return request.get(url);
}


// 用来添加用户
export let getAddUser=(params:object)=>{
    console.log(params)
    const url ='/user';
    return request.post(url,params)
}
// 添加身份
export let getAddIdentity=(params:object)=>{
    const url ='/user/identity/edit';
    return request.get(url,{
        params
    })
}