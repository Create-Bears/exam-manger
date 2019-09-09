import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Table } from 'antd'

interface Props {
    question: any
}

@inject('question')
@observer
class WaitClass extends React.Component<Props> {
    state = {
        data: [],
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
                dataIndex: 'option'
            }
        ]
    }
    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const { getWaitexam } = this.props.question
        let result = await getWaitexam()
        this.setState({
            data: result.exam
        })
    }
    public render() {
        console.log(this.state.data)
        const data = this.state.data.map((item: any, index) => {
            return {
                class: item.grade_name[0],
                project: item.subject_text,
                name: item.questions_type_text,
                status: item.status === '0' ? '未阅' : '已阅',
                projects: item.subject_text,
                success: item.room_text[0],
                option: item.status === '0' ? '批卷' : '',
                key: index
            }
        })
        return (
            <div>
                <h1 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>
                    待批班级
                </h1>
                <Table
                    columns={this.state.columns}
                    dataSource={data}
                    size="middle"
                />
            </div>
        )
    }
}

export default WaitClass
