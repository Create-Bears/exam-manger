//获取到登录态
import { getToken } from './index'
//获取到仓库
import store from '../store/index'

//封装路由守卫
function guard(history: any) {
    beforeEach(history)
    const unListen = history.listen((location: object) => {
        // console.log(location);
        beforeEach(history)
    })
    console.log(unListen)
}
function beforeEach(history: any) {
    if (getToken()) {
        const userInfo: any = store.user.userInfo
        if (!Object.keys(userInfo).length) {
            store.user.getUserInfoUser()
        }
    } else {
        // 去登陆页面
        history.replace('/login')
    }
}

export function filterView(
    originRoutes: object[],
    viewAutority: object[]
): object[] {
    const forbiddenView: object[] = []

    function func(originRoutes: object[], viewAutority: object[]): object[] {
        const routes: object[] = []
        originRoutes.forEach(({ ...item }: any) => {
            if (item.children) {
                item.children = func(item.children, viewAutority)
            }

            if (item.view_id) {
                if (
                    viewAutority.findIndex(
                        (value: any) => value.view_id === item.view_id
                    ) !== -1
                ) {
                    routes.push(item)
                } else {
                    forbiddenView.push({ from: item.path, to: '/403' })
                }
            } else {
                routes.push(item)
            }
        })
        return routes
    }

    let routes = func(originRoutes, viewAutority)
    //   console.log('routes...', routes, 'forbiddenView...', forbiddenView);
    return forbiddenView.concat(routes)
}

export default guard
