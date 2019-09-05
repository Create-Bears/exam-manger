import { observable, action } from 'mobx';
import { getUserLogin } from '../../service/index';
import { setToken, removeToken } from '../../utils/index';

//获取本地存储的用户信息
let account = {};

if (window.localStorage.getItem('account')) {
	account = JSON.parse(window.localStorage.getItem('account') + '');
}

interface LoginInfo {
	user_name: string;
	user_pwd: string;
	remember:any,
	autoLogin:any
}

class User {
	@observable isLogin: boolean = false;
	@observable account: any = account;

	@action async login(form: LoginInfo): Promise<any> {
		const result: any = await getUserLogin(form);
		if (result.code === 1) {
			//判断是否记住密码
			if (form.remember) {
				window.localStorage.setItem('account', JSON.stringify(form));
			} else {
				window.localStorage.removeItem('account');
			}
			if (form.autoLogin) {
				setToken(result.token);
			}
		}
		return result;
	}

	@action async loginout():Promise<any>{
		removeToken()
	}
}

export default User;
