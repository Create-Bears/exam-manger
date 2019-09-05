import request from '../utils/request'

//题目类型
export let getQuestionsType = (params: object) => {
    const url = '/exam/getQuestionsType'
    return request.get(url, { params })
}

//考试类型
export let getQuestionTypes = (params: object) => {
    const url = '/exam/examType'
    return request.get(url, { params })
}

//课题
export let getQuestionSubject = () => {
    const url = '/exam/subject'
    return request.get(url)
}

//考试列表
export let getQuestionExam = (params: object) => {
    const url = '/exam/questions/condition'
    return request.get(url, {
        params
    })
}

//添加试卷
export let getAddexam = (params: object) => {
    const url = '/exam/questions'
    return request.get(url, {
        params
    })
}


//待批班级的列表
export let getWaitexam = (params: object) => {
    const url = '/exam/exam'
    return request.get(url, {
        params
    })
}