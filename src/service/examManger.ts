import request from '../utils/request'

//添加考试
export let addExam = (params:object)=>{
    const url = '/exam/exam';
    return request.post(url,params)
}