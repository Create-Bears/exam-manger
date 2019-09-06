import * as React from 'react'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { inject, observer } from 'mobx-react'
import { Button, Table, Modal, Input, Divider, Form, Select } from 'antd'
const { Option } = Select
interface Props {
    classmanger: any
    data: any
    form: WrappedFormUtils
}

@inject('classmanger')
@observer
class ClassManger extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    state = {
        data: [],
        addList: '',
        modal1Visible: false,
        modal2Visible: false
    }

    setModal1Visible(modal1Visible: any) {
        this.setState({ modal1Visible })
    }

    setModal2Visible(modal2Visible: boolean) {
        this.setState({ modal2Visible })
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    handleSelectChange = (value: any) => {
        console.log(value)
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
        })
    }

    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const {
            getClassManger,
            getAddClass
            // getDeleteClass,
            // getUpdateClass
        } = this.props.classmanger
        let result = await getClassManger()
        let results = await getAddClass()
        // let resultes = await getDeleteClass()
        // let resultss = await getUpdateClass()
        this.setState({
            data: result.data,
            addList: results
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
                        <a>修改</a>
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
        console.log(data)

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
                            onClick={() => this.setModal2Visible(true)}>
                            +添加班级
                        </Button>
                        <Modal
                            title="创建新班级"
                            centered
                            visible={this.state.modal2Visible}
                            onOk={() => this.setModal2Visible(false)}
                            onCancel={() => this.setModal2Visible(false)}>
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
                                {/* <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item> */}
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
