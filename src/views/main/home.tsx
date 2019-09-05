import { Icon, Layout, Menu } from 'antd'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../index.css'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

class HomePage extends React.Component {
    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken)
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type)
                    }}>
                    <div className="logo" style={{ backgroundColor: '#fff' }}>
                        <img
                            style={{
                                margin: '8px 28px 16px 5px',
                                width: '178px'
                            }}
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
                            alt=""
                        />
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    试卷管理
                                </span>
                            }>
                            <Menu.Item key="1">
                                <NavLink to="/home/addlist">添加试题</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/home/textQuestion">
                                    试题分类
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to="/home/checkTextQuestion">
                                    查看试题
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="laptop" />
                                    用户管理
                                </span>
                            }>
                            <Menu.Item key="5">添加用户</Menu.Item>
                            <Menu.Item key="6">用户展示</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="notification" />
                                    考试管理
                                </span>
                            }>
                            <Menu.Item key="9">添加考试</Menu.Item>
                            <Menu.Item key="10">试卷列表</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="cloud-o" />
                                    班级管理
                                </span>
                            }>
                            <Menu.Item key="11">班级管理</Menu.Item>
                            <Menu.Item key="12">教室管理</Menu.Item>
                            <Menu.Item key="13">学生管理</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <span>
                                    <Icon type="appstore-o" />
                                    阅卷管理
                                </span>
                            }>
                            <Menu.Item key="14">待批班级</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <span className="user_slot">
                            <span className="user_avatar">
                                <span className="user_string" />
                            </span>
                            Chenmanjie
                        </span>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                background: '#ccc',
                                minHeight: 360
                            }}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default HomePage
