import { action, observable } from 'mobx'
import {
    getQuestionTypes, //考试类型
    getQuestionsType, //题目类型
    getQuestionSubject, //课题
    getQuestionExam //试题列表
} from '../../service/index'

class Question {
    @observable topList: any = []

    @action async getQuestionsType(params: any): Promise<any> {
        let result: any = await getQuestionsType(params)
        return result
    }
    @action async getQuestionSubject(): Promise<any> {
        let result: any = await getQuestionSubject()
        return result
    }
    @action async getQuestionExam(params: any): Promise<any> {
        let result: any = await getQuestionExam(params)
        console.log(result)
        return result
    }

    @action async getQuestionTypes(params: any): Promise<any> {
        let result: any = await getQuestionTypes(params)
        return result
    }
}

export default Question
