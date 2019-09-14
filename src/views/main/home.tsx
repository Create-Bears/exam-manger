import { Icon, Layout, Menu, Select, Modal, Form, Upload, Input,message } from 'antd'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import { inject, observer } from 'mobx-react'


//引入用户路由
import routes from '../../router/routes'
import { filterView } from '../../utils/permission'

//引入国际化
import { injectIntl } from 'react-intl'

// import axios from 'axios'

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu
const { Option } = Select

interface Props {
    user?: any
    intl?: any //国际化
    global: any
    data: any
    form: any
    why: any
}
@inject('user', 'global', 'why')
@observer
class HomePage extends React.Component<Props> {
    state = {
        langs: [{ lang: '中文' }, { lang: 'English' }],
        visible: false,
        appearing: true,
        loading: false
    }
    componentDidMount() {
        this.props.why.getlist()
    }
    handleChange = (value: any) => {
        const { locale } = this.props.global
        this.props.global.changeLocale(locale === 'zh' ? 'en' : 'zh')
        {
            locale === 'zh' ? '中文' : '英文'
        }
        console.log(value)
    }
    moveover = () => {
        this.setState({
            appearing: !this.state.appearing
        })
    }
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    handleOk = () => {
        this.props.form.validateFields(async (err: any, val: any) => {
            console.log('err...', err, val)
            if (!err) {
                val.avatar = this.props.user.avatar
                const { code, msg } = await this.props.user.updateUserInfo(val)
                if (code === 1) {
                    this.props.user.updateName(val.user_name, val.avatar)
                    message.success('更新用户信息成功')
                    this.setState({
                        visible: false
                    })
                } else {
                    message.error(msg)
                }
            }
        })
    }

    handleCancel = () => {
      this.setState({
        visible: false
      })
    }

    beforeUpload(): boolean {
      return true
    }

    handleChanges = (info: any) => {
      console.log('info....', info)

      if (info.file.status === 'done') {
        // 上传成功
        this.props.user.changeAvatar(info.file.response.data[0].path)
      } else if (info.file.status === 'uploading') {
        // 做上传进度条
        console.log('percent....', info.file.percent)
      }
    }
      render() {
          let { formatMessage } = this.props.intl //国际化
          let { viewAuthority } = this.props.user
          const { getFieldDecorator } = this.props.form
          const { userInfo, avatar } = this.props.user
          // const { locale } = this.props.global
          // console.log('viewAuthority...', viewAuthority)
          let myRoutes: any = filterView(routes, viewAuthority)
          myRoutes = myRoutes[1].children
          // console.log('myRoutes...', myRoutes)

      const uploadButton = (
        <div>
          <Icon type={this.state.loading ? 'loading' : 'plus'} />
          <div className="ant-upload-text">Upload</div>
        </div>
      )
      return (
        <Layout style={{ height: '100%' }}>
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
              <span
                style={{
                  position: 'absolute',
                  top: '1.5%',
                  left: '98%',
                  zIndex: 9999
                }}>
                <Select
                  defaultValue="中文"
                  style={{ width: 120 }}
                  onChange={this.handleChange}>
                  {this.state.langs.map((item: any, index) => {
                    return (
                      <Option value={item.lang} key={index}>
                        {item.lang}
                      </Option>
                    )
                  })}
                </Select>
              </span>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['4']}>
              {myRoutes.map((item: any) => {
                if (item.children) {
                  return (
                    <SubMenu
                      key={item.path}
                      title={
                        <span>
                          <Icon type="mail" />
                          <span>
                            {item.title
                              ? formatMessage({
                                id: item.title
                              })
                              : item.path}
                          </span>
                        </span>
                      }>
                      {item.children.map((value: any) => {
                        if (value.title) {
                          return (
                            <Menu.Item key={value.path}>
                              <NavLink
                                to={value.path}>
                                {value.title
                                  ? formatMessage(
                                    {
                                      id:
                                        value.title
                                    }
                                  )
                                  : value.path}
                              </NavLink>
                            </Menu.Item>
                          )
                        } else {
                          return ''
                        }
                      })}
                    </SubMenu>
                  )
                } else {
                  return (
                    <Menu.Item key={item.path}>
                      <Icon type="pie-chart" />
                      <span>
                        {item.title
                          ? formatMessage({
                            id: item.title
                          })
                          : item.path}
                      </span>
                    </Menu.Item>
                  )
                }
              })}
            </Menu>
          </Sider>
          <Layout style={{ height: '100%' }}>
            <Header
              style={{ background: '#fff', padding: 0 }}
              className="header">
              <span className="user_slot" onMouseOver={this.moveover}>
                <span className="user_avatar">
                  <span className="user_string">
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%'
                      }}
                      src={userInfo.avatar}
                      alt="用户头像"
                    />
                  </span>
                </span>
                {userInfo.user_name}
              </span>
            </Header>
            <div
              className={
                this.state.appearing === true
                  ? 'hidden lists'
                  : 'appear lists'
              }>
              <ul>
                <li className="meassage dismessage">
                  <span onClick={this.showModal}>个人中心</span>
                </li>
                <li
                  className="meassage dismessage"
                  style={{
                    borderBottom: '1px solid  #ccc'
                  }}>
                  我的班级</li>
                {/* <Divider dashed /> */}
                <li className="meassage dismessage">设置</li>
                <li className="meassage dismessage">退出登录</li>
              </ul>
            </div>
            <Modal
              title="更新用户信息"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}>
              <Form>
                <Form.Item label="用户头像">
                  {getFieldDecorator('avatar', {
                    initialValue: userInfo.user_id
                  })(
                    <Upload
                      listType="picture-card"
                      name="avatar"
                      action="http://123.206.55.50:11000/upload"
                      showUploadList={false}
                      beforeUpload={this.beforeUpload}
                      onChange={this.handleChanges}>
                      {avatar ? (
                        <img
                          src={avatar}
                          alt="avatar"
                          style={{ width: '100%' }}
                        />
                      ) : (
                          uploadButton
                        )}
                    </Upload>
                  )}
                </Form.Item>
                <Form.Item label="用户ID">
                  {getFieldDecorator('user_id', {
                    initialValue: userInfo.user_id
                  })(<Input disabled={true} />)}
                </Form.Item>
                <Form.Item label="用户名">
                  {getFieldDecorator('user_name', {
                    initialValue: userInfo.user_name,
                    rules: [
                      {
                        required: true,
                        message:
                          'Please input your user name!'
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="密码">
                  {getFieldDecorator('user_pwd', {
                    rules: [
                      {
                        validator: (
                          ruler: object[],
                          value: string,
                          callback: any
                        ) => {
                          console.log('value...', value)
                          if (
                            value &&
                            /^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(
                              value
                            )
                          ) {
                            callback()
                          } else if (!value) {
                            callback()
                          } else {
                            callback(
                              'Please input valid password!'
                            )
                          }
                        }
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Form>
            </Modal>
            <Content
              className="content"
              style={{
                margin: '24px 16px 0',
                overflow: 'hidden',
                overflowY: 'scroll'
              }}>
              <div>{this.props.children}</div>
            </Content>
          </Layout>
        </Layout>
      )
    }
}
const HomePages = Form.create()(HomePage)

export default injectIntl(HomePages)
