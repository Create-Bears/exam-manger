import request from '../utils/request'

export let getClassManger = (params: object) => {
    const url = '/manger/grade'
    return request.get(url, { params })
}

export let getAddClass = (params: object) => {
    const url = '/manger/grade'
    return request.post(url, params)
}

export let getUpdateClass = (params: object) => {
    const url = '/manger/grade/update'
    return request.put(url, params)
}

export let getDeleteClass = (params: object) => {
    const url = '/manger/grade/delete'
    return request.delete(url, { data: params })
}

export let getClasses = (params: object) => {
    const url = '/manger/room'
    return request.get(url, { params })
}

export let getAddClasses = (params: object) => {
    const url = '/manger/room'
    return request.post(url, params)
}

//获取学生管理信息
export let getStudentClass = ()=>{
    const url ='/manger/student';
    return request.get(url)
}
