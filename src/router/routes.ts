import Login from '../views/Login'
import AddList from '../views/main/addList'
import CheckTextQuestion from '../views/main/checkTextQuestion'
import TextQuestion from '../views/main/textQuestion'
import HomePage from 'src/views/main/home';
import UserShow from 'src/views/main/UserShow';
import AddUser from 'src/views/main/addUser';


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
                }, {
                    component: CheckTextQuestion,
                    path: '/home/checkTextQuestion'
    
                }, {
                    component: TextQuestion,
                    path: '/home/textQuestion'
    
                }, {
                    component:UserShow,
                    path:'/home/usershow'
                },{
                    component:AddUser,
                    path:'/home/adduser'
                },
                {
                    from: '/home',
                    to: '/home/addlist'
                }
            ],
            component:HomePage,
            path:'/home'
        },
        {
            from: '/',
            to: '/login'
        }
    ]
}