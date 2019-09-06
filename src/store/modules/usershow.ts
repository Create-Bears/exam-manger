import { observable, action } from 'mobx'
import { 
    getUser,
    getIdentity,
    getUserId,
    getUserApiType ,
    getUserApiView,
    getAddUser,
    getAddIdentity
} from '../../service/index'

class UserShow {
    @observable userList: Array<object> = [
        {
            title: '用户数据',
            id: 1
        },
        {
            title: '身份数据',
            id: 2
        },
        {
            title: 'api接口权限',
            id: 3
        },
        {
            title: '身份和api接口关系',
            id: 4
        },
        {
            title: '视图接口权限',
            id: 5
        },
        {
            title: '身份和视图权限关系',
            id: 6
        }
    ]

    @action async getUser(): Promise<any> {
        let result: any = await getUser();
        if (result.code === 1) {
            return result.data
        }
    }
    //获取身份id
    @action async getIdentity(): Promise<any> {
        let result: any = await getIdentity();
        if (result.code === 1) {
            return result.data
        }
    }
    //获取更新id
    @action async getUserId(): Promise<any> {
        let result: any = await getUserId();
        if (result.code === 1) {
            return result.data
        }
    }
    //获取api接口权限
    @action async getUserApiType():Promise<any>{
        let result :any=await getUserApiType();
        if (result.code === 1) {
            return result.data
        }
    }
    //获取已有视图数据
    @action async getUserApiView():Promise<any>{
        let result :any =await getUserApiView();
        if (result.code === 1) {
            return result.data
        }
    }
    //获取添加用户接口返回给数据
    @action async getAddUser(params:object){
        let result:any = await getAddUser(params);
        return result
    }
    //添加身份
    @action async getAddIdentity(params:object){
        let result:any=await getAddIdentity(params);
        return result
    }
}

export default UserShow