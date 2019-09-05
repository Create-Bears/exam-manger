import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Table } from 'antd'

interface Props {
    question: any,
    data: any,
    questions_type_id: any,
    questions_type_text: any
}

@inject('question')
@observer
class TextQuestion extends React.Component<Props>{
    constructor(props: Props) {
        super(props);
    }
    state = {
        data: [],
    }
    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const { getQuestionsType } = this.props.question;
        let result = await getQuestionsType();
        this.setState({
            data: result.data
        })
    }

    public render() {
        const columns = [
            {
                title: '类型ID',
                dataIndex: 'ID',

            },
            {
                title: '类型名称',
                dataIndex: 'name',
            },
            {
                title: '操作',
                dataIndex: 'caozuo',
            },
        ];
        const data = this.state.data.map((item: any, index) => {
            return {
                key: index,
                ID: item.questions_type_id,
                name: item.questions_type_text,
                caozuo: '',
            }
        })

        return <div>
            <h1>试卷分类</h1>
            <div className="content">
                <div style={{marginBottom:'10px'}}>
                    <Button type="primary" style={{padding:'0 40px',fontWeight:'bold'}}>+添加按钮</Button>
                </div>
                <div style={{backgroundColor:'#fff'}}>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </div>
    }
}

export default TextQuestion