import User from './modules/user'
import Question from './modules/question'
import UserShow from './modules/usershow'

const user = new User()
const question = new Question()
const userShow = new UserShow()


export default {
    user,
    question,
    userShow
}