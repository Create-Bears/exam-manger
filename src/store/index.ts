import User from './modules/user'
import Question from './modules/question'
import UserShow from './modules/usershow'
import ClassManger from './modules/classmanger'
import ExamManger from './modules/examManger'
import Global from './modules/global'
import Why from  "./modules/why"

const classmanger = new ClassManger()
const user = new User()
const question = new Question()
const userShow = new UserShow()
const examManger = new ExamManger()
const global = new Global()
const why=new Why()

export default {
    classmanger,
    user,
    question,
    userShow,
    examManger,
    global,
    why
}
