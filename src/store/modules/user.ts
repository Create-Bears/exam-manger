import { observable, action } from 'mobx'
import {
    getUserLogin,
    getUserInfoUser,
    getViewAuthority,
    updateUserInfo //更新当前用户信息
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
        this.userInfo = userInfo.data;
        this.avatar = userInfo.data.avatar;
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
    @action async updateUserInfo(data:object):Promise<any>{
        //更新完当前用户信息需要重新获取一下用户信息
        let result:any=await updateUserInfo(data);
        await this.getUserInfoUser()
        return result
    }
}

export default User
