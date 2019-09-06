import { action, observable } from 'mobx'
import {
    getClassManger, //班级管理
    getAddClass, //添加班级
    getDeleteClass, //删除班级
    getUpdateClass //更新班级
} from '../../service/index'

class Question {
    @observable
    @action
    async getClassManger(params: any): Promise<any> {
        let result: any = await getClassManger(params)
        return result
    }
    async getAddClass(params: any): Promise<any> {
        let result: any = await getAddClass(params)
        return result
    }
    async getDeleteClass(params: any): Promise<any> {
        let result: any = await getDeleteClass(params)
        return result
    }
    async getUpdateClass(params: any): Promise<any> {
        let result: any = await getUpdateClass(params)
        return result
    }
}

export default Question
