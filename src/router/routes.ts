import Login from '../views/Login'
import AddList from '../views/main/addList'
import CheckTextQuestion from '../views/main/checkTextQuestion'
import TextQuestion from '../views/main/textQuestion'
import HomePage from 'src/views/main/home'
import Detail from '../views/main/detail'
import WaitClass from '../views/main/waitClass'
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
                    component:WaitClass,
                    path: '/home/waitClass'
                },
                {
                    component: Detail,
                    path: '/home/detail/:id?'
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
