import request from '../utils/request'

export let getUser = () => {
    const url = '/user/user';
    return request.get(url)
}