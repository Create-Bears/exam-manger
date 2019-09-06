import Login from '../views/Login'
import AddList from '../views/main/addList'
import CheckTextQuestion from '../views/main/checkTextQuestion'
import TextQuestion from '../views/main/textQuestion'
import Detail from '../views/main/detail'
import WaitClass from '../views/main/waitClass'
import HomePage from '../views/main/home'
import UserShow from '../views/main/UserShow'
import AddUser from '../views/main/addUser'
import ClassManger from '../views/main/classManger'
import CheckTextEditor from '../views/main/checkTextEditor'

export default {
    routes: [
        {
            component: Login,
            path: '/login'
        },
        {
            children: [
                {
                    component: AddList,
                    path: '/home/addlist'
                },
                {
                    component: CheckTextQuestion,
                    path: '/home/checkTextQuestion'
                },
                {
                    component: TextQuestion,
                    path: '/home/textQuestion'
                },
                {
                    component: ClassManger,
                    path: '/home/classManger'
                },
                {
                    component: CheckTextEditor,
                    path: '/home/checkTextEditor/:id?'
                },
                {
                    component: WaitClass,
                    path: '/home/waitClass'
                },
                {
                    component: Detail,
                    path: '/home/detail/:id?'
                },
                {
                    component: UserShow,
                    path: '/home/usershow'
                },
                {
                    component: AddUser,
                    path: '/home/adduser'
                },
                {
                    from: '/home',
                    to: '/home/addlist'
                }
            ],
            component: HomePage,
            path: '/home'
        },
        {
            from: '/',
            to: '/login'
        }
    ]
}
