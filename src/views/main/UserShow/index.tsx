import * as React from 'react'
import { inject, observer } from 'mobx-react'
import './index.css'
import {Table} from 'antd'


interface Props {
    userShow: any,
    userList: any
}

@inject('userShow')
@observer
class UserShow extends React.Component<Props>{
    state = {
        index: 0,
        userlist: []
    }
    componentDidMount() {
        console.log(this.props)
        this.getList()
    }
    getList = async () => {
        let { getUser } = this.props.userShow;
        let result = await getUser();
        console.log(result)
        this.setState({
            userlist: result
        })
    }
    render() {
        let { userList } = this.props.userShow;
        let { index ,userlist} = this.state;
        const columns = [
            { title: '用户名', dataIndex: 'user_name', key: 'user_name' },
            { title: '密码', dataIndex: 'user_pwd', key: 'user_pwd' },
            { title: '身份', dataIndex: 'identity_text', key: 'identity_text' },
        ]
        const data =userlist.map((item:any,index:number)=>{
            return {
                key:index,
                user_name:item.user_name,
                user_pwd:item.user_pwd,
                identity_text:item.identity_text
            }
        })
        return <div className="content">
            <h2 className="title">用户展示</h2>
            <div className="user-btn">
                {userList.map((item: any, index: number) => {
                    return <ul key={index}>
                        <li>{item.title}</li>
                    </ul>
                })}
            </div>
            <div className="user-content">
                <h2 className="title">{userList[index].title}</h2>
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    }
}

export default UserShow