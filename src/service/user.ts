import request from '../utils/request'

export let getUserLogin = (params: object) => {
    const url = '/user/login';
    return request.post(url, params)
}