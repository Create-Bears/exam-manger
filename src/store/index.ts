import User from './modules/user'
import Question from './modules/question'
import UserShow from './modules/usershow'
import ClassManger from './modules/classmanger'

const classmanger = new ClassManger()
const user = new User()
const question = new Question()
const userShow = new UserShow()

export default {
    classmanger,
    user,
    question,
    userShow
}
