import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Table, Modal, Input } from 'antd'

interface Props {
    question: any
    data: any
    questions_type_id: any
    questions_type_text: any
}

@inject('question')
@observer
class TextQuestion extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    state = {
        data: [],
        modal1Visible: false,
        modal2Visible: false
    }

    setModal1Visible(modal1Visible: any) {
        this.setState({ modal1Visible })
    }

    setModal2Visible(modal2Visible: boolean) {
        this.setState({ modal2Visible })
    }

    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const { getQuestionsType } = this.props.question
        let result = await getQuestionsType()
        this.setState({
            data: result.data
        })
    }

    public render() {
        const columns = [
            {
                title: '类型ID',
                dataIndex: 'ID'
            },
            {
                title: '类型名称',
                dataIndex: 'name'
            },
            {
                title: '操作',
                dataIndex: 'caozuo'
            }
        ]
        const data = this.state.data.map((item: any, index) => {
            return {
                key: index,
                ID: item.questions_type_id,
                name: item.questions_type_text,
                caozuo: ''
            }
        })

        return (
            <div>
                <h1 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>
                    试卷分类
                </h1>
                <div className="content">
                    <div style={{ marginBottom: '10px' }}>
                        <Button
                            type="primary"
                            style={{ padding: '0 40px', fontWeight: 'bold' }}
                            onClick={() => this.setModal2Visible(true)}>
                            +添加按钮
                        </Button>
                        <Modal
                            title="创建新类型"
                            centered
                            visible={this.state.modal2Visible}
                            onOk={() => this.setModal2Visible(false)}
                            onCancel={() => this.setModal2Visible(false)}>
                            <Input
                                style={{
                                    border: 'none',
                                    borderBottom: '1px solid #ccc',
                                    outline: 'none'
                                }}
                                size="large"
                                placeholder="请输入类型名称"
                            />
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

export default TextQuestion
