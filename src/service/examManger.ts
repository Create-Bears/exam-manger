import request from '../utils/request'

//添加考试
export let addExam = (params: object) => {
    const url = '/exam/exam'
    return request.post(url, params)
}

//获取试卷列表
export let examListData = (params: object) => {
    const url = '/exam/exam'
    return request.get(url, params)
}

//获取对应班级的学生试卷列表
export let examStudentList = (params: object) => {
    const url = '/exam/student'
    return request.get(url, { params })
}

//添加考试后重新获取数据
export let examAddQuestion = (params: object,id:any) => {
    const url = `/exam/exam/${id}`
    return request.put(url, params)
}
