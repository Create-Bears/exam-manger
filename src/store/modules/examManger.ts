import { action } from 'mobx'
import { addExam, examListData, examStudentList } from '../../service/index'

class ExamManger {
    //添加试卷
    @action async addExam(params: object): Promise<any> {
        let result = await addExam(params)
        return result
    }
    //获取试题列表
    @action async examListData(params: object): Promise<any> {
        let result = await examListData(params)
        return result
    }

    //获取对应班级的学生列表
    @action async examStudentList(params: object): Promise<any> {
        let result = await examStudentList(params)
        return result
    }
}
export default ExamManger
