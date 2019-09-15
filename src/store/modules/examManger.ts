import { action, observable } from 'mobx'
import { addExam, examListData, examStudentList, examAddQuestion } from '../../service/index'

class ExamManger {
    @observable questionListData: object[] = []
    @observable id: any = ""
    //添加试卷
    @action addExam = async (params: object): Promise<any> => {
        let result: any = await addExam(params)
        if (result.code === 1) {
            this.id = result.data.exam_exam_id;
        }
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
    @action examAddQuestion = async (params: object): Promise<any> => {
        let { id } = this
        let result = await examAddQuestion(params, id)
        return result
    }
}
export default ExamManger
