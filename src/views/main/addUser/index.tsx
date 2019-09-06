import * as React from 'react'
import './index.css'
import { inject, observer } from 'mobx-react'
// const { Option } = Select;
import ADDUser from '../../../components/adduser'
import AddIdentity from '../../../components/addIdentity'
import AddView from '../../../components/addView'
import AddApiIdentity from '../../../components/addApiIdentity'
import SetApiIdentity from '../../../components/setApiIdentity'
import SetViewIdentity from '../../../components/setViewIdentity'

interface Props {
    userShow: any
}

@inject('userShow')
@observer

class AddUser extends React.Component<Props>{
    state = {
        isShow: false,
        SfId: [],
        ApiType: [],
        ApiView: [],
        identity_text:'',
    }
    componentDidMount() {
        this.getUserId();
    }
    
    getUserId = async () => {
        // ,getUserId
        let { getIdentity, getUserApiType, getUserApiView } = this.props.userShow;
        let result = await getIdentity();
        let resultApiType = await getUserApiType();
        let resultApiView = await getUserApiView()
        this.setState({
            SfId: result,
            ApiType: resultApiType,
            ApiView: resultApiView
        })
    }
    render() {
        let { SfId,ApiView,ApiType } = this.state;
        return (
            <div>
                <h2 className="adduser-title">添加用户</h2>
                <div className="adduser-content">
                    <ADDUser Sfid={SfId} aDDuser={this.props.userShow}/>
                    <AddIdentity addIdentity={this.props.userShow}/>
                    <AddApiIdentity addApiIdentity={this.props.userShow}/>
                    <AddView Apiview={ApiView} addViewAuthor={this.props.userShow}/>
                    <SetApiIdentity Sfid={SfId} Apitype={ApiType} setApiViewAuthor={this.props.userShow}/>
                    <SetViewIdentity Sfid={SfId} Apiview={ApiView} setViewIdentity={this.props.userShow}/>
                </div>
            </div>
        )
    }
}

export default AddUser