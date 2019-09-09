import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Table, Divider, Button, Modal, Form, Select, Input } from 'antd'
const { Option } = Select
interface Props {
    age: number
    name: string
    classmanger: any
    data: any
    question: any
    form: any
}

@inject('classmanger', 'question')
@observer
class ClassManger extends React.Component<Props> {
    state = {
        data: [],
        addList: '',
        names: '',
        classroom: [],
        subject: [],
        vals: '',
        val: '',
        subject_id: '',
        visible: false
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    hideModal = () => {
        this.setState({
            visible: false
        })
    }
    handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    handleSelectChange = (value: string) => {
        console.log(value)
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
        })
    }

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
        return (
            <div>
                <h1 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>
                    班级管理
                </h1>
                <div className="content">
                    <div style={{ marginBottom: '10px' }}>
                        <Button type="primary" onClick={this.showModal}>
                            Modal
                        </Button>
                        <Modal
                            title="+添加班级"
                            visible={this.state.visible}
                            onOk={this.hideModal}
                            onCancel={this.hideModal}
                            okText="确认"
                            cancelText="取消">
                            <Form
                                labelCol={{ span: 5 }}
                                wrapperCol={{ span: 12 }}
                                onSubmit={this.handleSubmit}>
                                <Form.Item label="Note">
                                    {getFieldDecorator('note', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Please input your note!'
                                            }
                                        ]
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="Gender">
                                    {getFieldDecorator('gender', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Please select your gender!'
                                            }
                                        ]
                                    })(
                                        <Select
                                            placeholder="Select a option and change input text above"
                                            onChange={this.handleSelectChange}>
                                            <Option value="male">male</Option>
                                            <Option value="female">
                                                female
                                            </Option>
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
