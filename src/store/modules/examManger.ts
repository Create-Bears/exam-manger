import {action} from 'mobx'
import {addExam} from '../../service/index'

class ExamManger{
    @action async addExam(params:object):Promise<any>{
        let result = await addExam(params)
        return result
    }
}
export default ExamManger