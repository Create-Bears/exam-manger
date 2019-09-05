import { observable, action } from 'mobx'
import { getUser } from '../../service/index'

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
}

export default UserShow