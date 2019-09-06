import * as React from 'react'
import { inject, observer } from 'mobx-react'
import './index.css'
import { Layout, Select, Button } from 'antd'
const { Option, OptGroup } = Select

interface Props {
    question: any
    history: any
}

@inject('question')
@observer
class CheckTextQuestion extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    state = {
        topList: [],
        examQuestion: [],
        examType: [],
        titleType: [],
        current: 0
    }
    clicks(ind: any) {
        this.setState({
            current: ind
        })
    }
    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const {
            getQuestionSubject,
            getQuestionExam,
            getQuestionsType,
            getQuestionTypes
        } = this.props.question
        let result = await getQuestionSubject()
        let resultList = await getQuestionExam()
        let typeList = await getQuestionsType()
        let examList = await getQuestionTypes()
        console.log(result.data)
        this.setState({
            topList: result.data,
            examQuestion: resultList.data,
            titleType: typeList.data,
            examType: examList.data
        })
    }
    public render() {
        return (
            <div>
                <h1 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>查看试题</h1>
                <div className="ant-top">
                    <div className="row">
                        <div className="row1" style={{ fontSize: '13px' }}>
                            <b>课程类型</b>:
                        </div>
                        <div className="row2">
                            <div className="control">
                                <span className="child">
                                    <span className="tag ant-tag-checkable">
                                        All
                                    </span>
                                    {this.state.topList.map(
                                        (item: any, index) => {
                                            return (
                                                <span
                                                    className={
                                                        this.state.current ===
                                                        index
                                                            ? 'tag ant-tag-checkable-checked'
                                                            : 'tag ant-tag-checkable'
                                                    }
                                                    key={index}
                                                    onClick={this.clicks.bind(
                                                        this,
                                                        index
                                                    )}>
                                                    {item.subject_text}
                                                </span>
                                            )
                                        }
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="topList-b">
                        <div style={{ fontSize: '13px' }}>
                            <b>考试类型</b>:
                            <Select defaultValue="" style={{ width: 200 }}>
                                <OptGroup label="考试类型">
                                    {this.state.examType.map(
                                        (item: any, index) => {
                                            return (
                                                <Option
                                                    value={item.exam_name}
                                                    key={index}>
                                                    {item.exam_name}
                                                </Option>
                                            )
                                        }
                                    )}
                                </OptGroup>
                            </Select>
                        </div>
                        <div style={{ fontSize: '13px' }}>
                            <b>题目类型</b>:
                            <Select defaultValue="" style={{ width: 200 }}>
                                <OptGroup label="题目类型">
                                    {this.state.titleType.map(
                                        (item: any, index) => {
                                            return (
                                                <Option
                                                    value={
                                                        item.questions_type_text
                                                    }
                                                    key={index}>
                                                    {item.questions_type_text}
                                                </Option>
                                            )
                                        }
                                    )}
                                </OptGroup>
                            </Select>
                        </div>
                        <div>
                            <Button type="primary" icon="search">
                                查询
                            </Button>
                        </div>
                    </div>
                </div>

                <Layout>
                    <div className="ant-list">
                        {this.state.examQuestion.map(
                            (item: any, index: number) => {
                                return (
                                    <div
                                        className="antd-list-item"
                                        key={index}
                                        onClick={() => {
                                            this.props.history.replace(
                                                `/home/detail?id=${item.questions_id}`,
                                                { id: item.questions_id }
                                            )
                                            console.log(this.props)
                                        }}>
                                        <div className="antd-list-item-l">
                                            <div className="antd-list-item-l-t">
                                                <h4
                                                    style={{
                                                        fontSize: '16px'
                                                    }}>
                                                    {item.title}
                                                </h4>
                                            </div>
                                            <div className="antd-list-item-l-b">
                                                <div>
                                                    <div className="ant-tag ant-tag-blue">
                                                        {
                                                            item.questions_type_text
                                                        }
                                                    </div>
                                                    <div className="ant-tag ant-tag-geekblue">
                                                        {item.subject_text}
                                                    </div>
                                                    <div className="ant-tag ant-tag-orange">
                                                        {item.exam_name}
                                                    </div>
                                                </div>
                                                <span
                                                    style={{
                                                        fontSize: '16px'
                                                    }}>
                                                    {item.user_name}发布
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="antd-list-item-r">
                                            <li
                                                style={{
                                                    fontSize: '14px'
                                                }}>
                                                <a
                                                    href=""
                                                    style={{
                                                        fontSize: '14px'
                                                    }}>
                                                    编辑
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </Layout>
            </div>
        )
    }
}

export default CheckTextQuestion
