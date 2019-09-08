import {action} from 'mobx'
import {addExam,examListData} from '../../service/index'

class ExamManger{
    //添加试卷
    @action async addExam(params:object):Promise<any>{
        let result = await addExam(params)
        return result
    }
    //获取试题列表
    @action async examListData(params:object):Promise<any>{
        let result = await examListData(params)
        return result
    }
}
export default ExamManger