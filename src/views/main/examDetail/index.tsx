import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Table, Select } from 'antd'

interface Props {
    question: any
    classmanger: any
}

@inject('question', 'classmanger')
@observer
class ExamDetail extends React.Component<Props> {
    state = {
        data: [],
        status: ['未阅', '已阅'],
        columns: [
            {
                title: '班级名',
                dataIndex: 'class'
            },
            {
                title: '课程名称',
                dataIndex: 'project'
            },
            {
                title: '阅卷状态',
                dataIndex: 'status'
            },
            {
                title: '课程名称',
                dataIndex: 'projects'
            },
            {
                title: '成才率',
                dataIndex: 'success'
            },
            {
                title: '操作',
                dataIndex: 'option',
                render: (text: any, record: any) => (
                    <span>
                        <a onClick={this.examDetail.bind(this, text)}>批卷</a>
                    </span>
                )
            }
        ]
    }
    examDetail(text: any) {
        console.log(text, this.props)
    }
    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const { getClassManger } = this.props.classmanger
        let result = await getClassManger()
        this.setState({
            data: result.data
        })
    }
    handleChange(value: any) {
        console.log(`Selected: ${value}`)
    }
    handleChanges(value: any) {
        console.log(`Selected: ${value}`)
    }
    public render() {
        console.log(this.state.data)
        const data = this.state.data.map((item: any, index) => {
            return {
                class: item.grade_name,
                project: item.subject_text,
                status: '',
                projects: item.subject_text,
                success: item.room_text,
                key: index
            }
        })
        return (
            <div>
                <div>
                    <span>状态</span>
                    <Select
                        defaultValue=""
                        onChange={this.handleChange}
                        style={{ width: 200 }}>
                        {this.state.status}
                    </Select>
                </div>
                <div>
                    <span>班级</span>
                    <Select
                        defaultValue=""
                        onChange={this.handleChanges}
                        style={{ width: 200 }}>
                        {this.state.data.map((item: any) => {
                            return item.grade_item
                        })}
                    </Select>
                </div>
                <Table
                    columns={this.state.columns}
                    dataSource={data}
                    size="middle"
                />
            </div>
        )
    }
}

export default ExamDetail
