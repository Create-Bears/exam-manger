import request from '../utils/request'

//添加考试
export let addExam = (params:object)=>{
    const url = '/exam/exam';
    return request.post(url,params)
}

//获取试卷列表
export let examListData = (params:object)=>{
    const url = '/exam/exam';
    return request.get(url,params)
}