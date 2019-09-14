import { observable, action } from 'mobx'
import {
    getUserLogin,
    getUserInfoUser,
    getViewAuthority,
    updateUserInfo
} from '../../service/index'
import { setToken, removeToken } from '../../utils/index'

//获取本地存储的用户信息
let account = {}

if (window.localStorage.getItem('account')) {
    account = JSON.parse(window.localStorage.getItem('account') + '')
}

interface LoginInfo {
    user_name: string
    user_pwd: string
    remember: any
    autoLogin: any
}

class User {
    @observable isLogin: boolean = false
    @observable account: any = account
    @observable userInfo: any = {}
    @observable viewAuthority: object[] = []
    @observable avatar: string = ''

    @action async login(form: LoginInfo): Promise<any> {
        const result: any = await getUserLogin(form)
        if (result.code === 1) {
            //判断是否记住密码
            if (form.remember) {
                window.localStorage.setItem('account', JSON.stringify(form))
            } else {
                window.localStorage.removeItem('account')
            }
            if (form.autoLogin) {
                setToken(result.token)
            }
        }
        return result
    }
    //退出登录
    @action async loginout(): Promise<any> {
        removeToken()
    }
    //获取用户信息
    @action async getUserInfoUser(): Promise<any> {
        let userInfo: any = await getUserInfoUser()
        console.log(this, this.userInfo, 'this')
        this.userInfo = userInfo.data
        this.avatar = userInfo.data.avatar //为了上传头像后点击确定按钮 用户头像才改变
        this.getViewAuthority()
    }
    //获取用户权限
    @action async getViewAuthority(): Promise<any> {
        let viewAuthority: any = await getViewAuthority()
        this.viewAuthority = viewAuthority.data
    }

    // 修改用户头像
    @action changeAvatar(avatar: string): void {
        this.avatar = avatar
    }

    //更新用户
    @action async updateUserInfo(data: object): Promise<any> {
        let userInfo = this.userInfo
        this.userInfo = userInfo
        let result: any = await updateUserInfo(data)
        return result
    }

    // 更新名字与头像
    @action updateName(name: string, avators: string) {
        let userInfo = this.userInfo
        userInfo.user_name = name
        userInfo.avatar = avators
        this.userInfo = userInfo
    }
}

export default User
