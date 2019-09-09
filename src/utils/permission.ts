//获取到登录态
import {getToken} from './index'
//获取到仓库
import store from '../store/index'


//封装路由守卫
function guard(history:any){
  console.log(history);
  beforeEach(history);
  const unListen = history.listen((location:object)=>{
    beforeEach(history)
  })
  console.log(unListen)
}
function beforeEach(history:any){
  if(getToken()){
    const userInfo:any = store.user.userInfo;
        if (!Object.keys(userInfo).length){
            store.user.getUserInfoUser();
        }
  }else{
    // 去登陆页面
    history.replace('/login');
  }
}

export default guard