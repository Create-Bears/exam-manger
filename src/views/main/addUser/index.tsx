import * as React from 'react'
import './index.css'
import { inject, observer } from 'mobx-react'
import {  message } from 'antd'
// const { Option } = Select;
import  ADDUser from '../../../components/adduser'

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
    handleChange = (value: any) => {
        this.setState({
            identity_id:value
        })
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
        },()=>{
            console.log(this.state)
        })
        
    }
    render() {
        // let { SfId, ApiType, ApiView, user_name, user_pwd,identity_text } = this.state;
        return (
            <div>
                <h2 className="adduser-title">添加用户</h2>
                <div className="adduser-content">
                    <ADDUser Sfid={this.state.SfId} aDDuser={this.props.userShow}/>
                    {/* <div className="adduser-wrapper">
                        <div className="adduser-input">
                            <Button onClick={this.addUser}>添加用户</Button>
                            <Button onClick={this.upDateUser}>更新用户</Button>
                        </div>
                        <div className="adduser-input">
                            <Input placeholder="user_name" name="user_name" value={user_name} onChange={this.handAddUserValue} />
                        </div>
                        <div className="adduser-input">
                            <Input placeholder="user_pwd" name="user_pwd" value={user_pwd} onChange={this.handAddUserValue} />
                        </div>
                        <div className="adduser-input">
                            <Select placeholder="请选择身份id" style={{ width: 120 }} onChange={this.handleChange}>
                                {SfId.map((item: any, index: number) => {
                                    return <Option key={index} value={item.identity_id}>{item.identity_text}</Option>
                                })}
                            </Select>
                        </div>
                        <div className="adduser-input">
                            <Button type="primary" onClick={this.handAddUser}>确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div> */}
                    {/* <div className="adduser-wrapper">
                        <div className="adduser-input">
                            <Button>添加身份</Button>
                        </div>
                        <div className="adduser-input">
                            <Input placeholder="请输入身份名称" name="identity_text" value={identity_text} onChange={this.handAddUserValue}/>
                        </div>
                        <div className="adduser-input">
                            <Button type="primary" onClick={this.handClickSf}>确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="adduser-wrapper">
                        <div className="adduser-input">
                            <Button>添加api接口权限</Button>
                        </div>
                        <div className="adduser-input">
                            <Input placeholder="请输入api接口权限名称" />
                        </div>
                        <div className="adduser-input">
                            <Input placeholder="请输入api接口权限url" />
                        </div>
                        <div className="adduser-input">
                            <Input placeholder="请输入api接口权限方法" />
                        </div>
                        <div className="adduser-input">
                            <Button type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="adduser-wrapper">
                        <div className="adduser-input">
                            <Button>添加视图接口权限</Button>
                        </div>
                        <div className="adduser-input">
                            <Select placeholder="请选择以有视图" style={{ width: 120 }} onChange={this.handleChange}>
                                {ApiView.map((item: any, index: number) => {
                                    return <Option key={index} value={item.view_authority_text}>{item.view_authority_text}</Option>
                                })}
                            </Select>
                        </div>
                        <div className="adduser-input">
                            <Button type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="adduser-wrapper">
                        <div className="adduser-input">
                            <Button>给身份设置api接口权限</Button>
                        </div>
                        <div className="adduser-input">
                            <Select placeholder="请选择身份id" style={{ width: 120 }} onChange={this.handleChange}>
                                {SfId.map((item: any, index: number) => {
                                    return <Option key={index} value={item.identity_text}>{item.identity_text}</Option>
                                })}
                            </Select>
                        </div>
                        <div className="adduser-input">
                            <Select placeholder="请选择api接口权限" style={{ width: 120 }} onChange={this.handleChange}>
                                {ApiType.map((item: any, index: number) => {
                                    return <Option key={index} value={item.api_authority_text}>{item.api_authority_text}</Option>
                                })}
                            </Select>
                        </div>
                        <div className="adduser-input">
                            <Button type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="adduser-wrapper"> */}
                        {/* <div className="adduser-input">
                            <Button>给身份设置视图权限</Button>
                        </div>
                        <div className="adduser-input">
                            <Select placeholder="请选择身份id" style={{ width: 120 }} onChange={this.handleChange}>
                                {SfId.map((item: any, index: number) => {
                                    return <Option key={index} value={item.identity_text}>{item.identity_text}</Option>
                                })}
                            </Select>
                        </div>
                        <div className="adduser-input">
                            <Select placeholder="请选择视图权限id" style={{ width: 120 }} onChange={this.handleChange}>
                                {ApiView.map((item: any, index: number) => {
                                    return <Option key={index} value={item.view_authority_text}>{item.view_authority_text}</Option>
                                })}
                            </Select>
                        </div>
                        <div className="adduser-input">
                            <Button type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
    
    //添加身份
    handClickSf=async ()=>{
        let {identity_text}=this.state;
        let {getAddIdentity}=this.props.userShow;
        let result =await getAddIdentity({
            "identity_text":identity_text
        })
        if(result.code===1){
            message.success(result.msg)
        }else{
            message.error(result.msg)
        }
    }
}

export default AddUser