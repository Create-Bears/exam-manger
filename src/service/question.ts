import request from '../utils/request'

export let getQuestionsType = (params: object) => {
    const url = '/exam/getQuestionsType';
    return request.get(url, {params})
}

export let getQuestionSubject=()=>{
    const url ='/exam/subject';
    return request.get(url)
}

export let getQuestionExam =(params:object)=>{
    const url ='/exam/questions/condition';
    return request.get(url,{
        params
    })
}