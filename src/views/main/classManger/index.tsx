import * as React from 'react'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { inject, observer } from 'mobx-react'
import {
    Button,
    Table,
    Modal,
    Input,
    Divider,
    Form,
    Select,
    message
} from 'antd'
const { Option } = Select
interface Props {
    classmanger: any
    data: any
    form: WrappedFormUtils
    question: any
}

@inject('classmanger', 'question')
@observer
class ClassManger extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    state = {
        data: [],
        addList: '',
        names: '',
        classroom: [],
        subject: [],
        vals: '',
        val: '',
        modal1Visible: false,
        modal2Visible: false,
        subject_id: ''
    }

    setModal1Visible(modal1Visible: any) {
        this.setState({ modal1Visible })
    }

    setModal2Visible(modal2Visible: any) {
        this.setState({
            modal2Visible: modal2Visible.show
        })
        if (modal2Visible.key === '确认') {
            this.AddClass()
            // this.AddClasses()
            // this.setState({
            //     names: ''
            // })
        }
    }
    // handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //         }
    //     })
    // }
    handleSelectChange = (value: any) => {
        // console.log(value)
        this.setState({
            vals: value
        })
    }

    handleSelectChanges = (value: any) => {
        // console.log(value)
        this.setState({
            val: value
        })
    }
    //调用mobx 发起axios请求 添加班级接口
    AddClass = async () => {
        let { getAddClass } = this.props.classmanger
        let result = await getAddClass({
            grade_name: this.state.names,
            subject_id: this.state.subject_id + ''
        })
        if (result.code === 1) {
            //添加成功后重新渲染数据
            message.success(result.msg)
        } else {
            message.error(result.msg)
        }
        this.getList()
    }
    componentDidMount() {
        this.getList()
    }

    getList = async () => {
        const {
            getClassManger,
            getClasses
            // getDeleteClass,
            // getUpdateClass
        } = this.props.classmanger
        const { getQuestionSubject } = this.props.question
        let result = await getClassManger()
        let resultl = await getClasses()
        let projects = await getQuestionSubject()
        // let resultes = await getDeleteClass()
        // let resultss = await getUpdateClass()
        this.setState({
            subject: projects.data,
            classroom: resultl.data,
            data: result.data,
            subject_id: result.data.length + 1
        })
        console.log(this.state.data)
    }
    // //调用mobx 发起axios请求  添加教室号接口
    // AddClasses = async () => {
    //     let { getAddClasses } = this.props.classmanger
    //     let result = await getAddClasses({
    //         room_id: this.state.vals
    //     })
    //     if (result.code === 1) {
    //         //添加成功后重新渲染数据
    //         message.success(result.msg)
    //     } else {
    //         message.error(result.msg)
    //     }
    //     this.getList()
    // }

    public render() {
        const { getFieldDecorator } = this.props.form
        const columns = [
            {
                title: '班级名',
                dataIndex: 'class'
            },
            {
                title: '课程名',
                dataIndex: 'project'
            },
            {
                title: '教室号',
                dataIndex: 'classes'
            },
            {
                title: 'option',
                key: 'action',
                render: (text: any, record: any) => (
                    <span>
                        <a
                            onClick={() => {
                                console.log(text, record)
                                this.setState({
                                    names: text.class
                                })
                                this.setModal2Visible({
                                    show: true,
                                    key: '添加'
                                })
                            }}>
                            修改
                        </a>
                        <Divider type="vertical" />
                        <a>删除</a>
                    </span>
                )
            }
        ]
        const data = this.state.data.map((item: any, index) => {
            return {
                key: index,
                class: item.grade_name,
                project: item.subject_text,
                classes: item.room_text
            }
        })
        // console.log(data)

        return (
            <div>
                <h1 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>
                    班级管理
                </h1>
                <div className="content">
                    <div style={{ marginBottom: '10px' }}>
                        <Button
                            type="primary"
                            style={{ padding: '0 40px', fontWeight: 'bold' }}
                            onClick={() =>
                                this.setModal2Visible({
                                    show: true,
                                    key: '添加'
                                })
                            }>
                            +添加班级
                        </Button>
                        <Modal
                            title="创建新班级"
                            centered
                            okText="确认"
                            cancelText="取消"
                            visible={this.state.modal2Visible}
                            onOk={() =>
                                this.setModal2Visible({
                                    show: false,
                                    key: '确认'
                                })
                            }
                            onCancel={() =>
                                this.setModal2Visible({
                                    show: false,
                                    key: '取消'
                                })
                            }>
                            <Form
                                labelCol={{ span: 5 }}
                                wrapperCol={{ span: 12 }}>
                                <Form.Item label="班级名">
                                    {getFieldDecorator('class', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Please input your classname!'
                                            }
                                        ]
                                    })(
                                        <Input
                                            onChange={e => {
                                                this.setState({
                                                    names: e.target.value
                                                })
                                            }}
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item label="教室号">
                                    {getFieldDecorator('classes', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Please select your classes!'
                                            }
                                        ]
                                    })(
                                        <Select
                                            placeholder=""
                                            onChange={this.handleSelectChange}>
                                            {this.state.classroom.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <Option
                                                            value={
                                                                item.room_text
                                                            }
                                                            key={index}>
                                                            {item.room_text}
                                                        </Option>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item label="课程名称">
                                    {getFieldDecorator('project', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Please select your project!'
                                            }
                                        ]
                                    })(
                                        <Select
                                            placeholder=""
                                            onChange={this.handleSelectChanges}>
                                            {this.state.subject.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <Option
                                                            value={
                                                                item.subject_text
                                                            }
                                                            key={index}>
                                                            {item.subject_text}
                                                        </Option>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    )}
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Form.create()(ClassManger)
