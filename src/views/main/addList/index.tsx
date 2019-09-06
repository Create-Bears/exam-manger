import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Editor from 'for-editor'
import { Select, Input, Button, Modal } from 'antd'
import './index.css'
const { Option, OptGroup } = Select
const { confirm } = Modal

interface Props {
    question: any
    countDown: any
}

@inject('question')
@observer
class AddList extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    state = {
        topList: [],
        examType: [],
        titleType: []
    }
    componentDidMount() {
        this.getList()
    }
    showConfirm() {
        confirm({
            title: '你确定要添加这道题么?',
            content: '真的要添加么',
            onOk() {
                let secondsToGo = 5
                const modal = Modal.success({
                    title: 'This is a notification message',
                    content: `This modal will be destroyed after ${secondsToGo} second.`
                })
                const timer = setInterval(() => {
                    secondsToGo -= 1
                    modal.update({
                        content: `This modal will be destroyed after ${secondsToGo} second.`
                    })
                }, 1000)
                setTimeout(() => {
                    clearInterval(timer)
                    modal.destroy()
                }, secondsToGo * 1000)
            },
            onCancel() {
                console.log('取消')
            }
        })
    }
    getList = async () => {
        const {
            getQuestionSubject,
            getAddexam,
            getQuestionsType,
            getQuestionTypes
        } = this.props.question
        let results = await getQuestionSubject()
        let result = await getAddexam()
        let typeList = await getQuestionsType()
        let examList = await getQuestionTypes()
        console.log(result)
        this.setState({
            topList: results.data,
            AddList: result.msg,
            titleType: typeList.data,
            examType: examList.data
        })
    }
    public render() {
        return (
            <div>
                <div style={{ fontSize: '18px', margin: '0 0 10px 0' }}>
                    添加试题
                </div>
                <h3>题目信息</h3>
                <div style={{ fontSize: '13px', margin: '0 0 10px 0' }}>
                    题干
                </div>
                <div>
                    <Input
                        className="antd-inp"
                        size="large"
                        placeholder="请输入题目标题，不超过20个字"
                    />
                </div>
                <div style={{ fontSize: '13px', margin: '20px 0 10px 0' }}>
                    题目主题
                </div>
                <div className="for-content">
                    <Editor></Editor>
                </div>
                <div>
                    <div style={{ fontSize: '13px' }}>
                        <div style={{ margin: '20px 0 10px 0' }}>
                            <b>请选择考试类型</b>:
                        </div>
                        <Select defaultValue="周考1" style={{ width: 200 }}>
                            <OptGroup label="">
                                {this.state.examType.map((item: any, index) => {
                                    return (
                                        <Option
                                            value={item.exam_name}
                                            key={index}>
                                            {item.exam_name}
                                        </Option>
                                    )
                                })}
                            </OptGroup>
                        </Select>
                    </div>
                    <div style={{ fontSize: '13px' }}>
                        <div style={{ margin: '20px 0 10px 0' }}>
                            <b>请选择课程类型</b>:
                        </div>
                        <Select
                            defaultValue="javaScript上"
                            style={{ width: 200 }}>
                            <OptGroup label="">
                                {this.state.topList.map((item: any, index) => {
                                    return (
                                        <Option
                                            value={item.subject_text}
                                            key={index}>
                                            {item.subject_text}
                                        </Option>
                                    )
                                })}
                            </OptGroup>
                        </Select>
                    </div>
                    <div style={{ fontSize: '13px' }}>
                        <div style={{ margin: '20px 0 10px 0' }}>
                            <b>请选择题目类型</b>:
                        </div>
                        <Select defaultValue="简答题" style={{ width: 200 }}>
                            <OptGroup label="">
                                {this.state.titleType.map(
                                    (item: any, index) => {
                                        return (
                                            <Option
                                                value={item.questions_type_text}
                                                key={index}>
                                                {item.questions_type_text}
                                            </Option>
                                        )
                                    }
                                )}
                            </OptGroup>
                        </Select>
                    </div>
                    <div style={{ fontSize: '15px', margin: '25px 0 10px 0' }}>
                        答案信息
                    </div>
                    <div className="for-content">
                        <Editor></Editor>
                    </div>
                    <div style={{ margin: '20px 0 0px 0' }}>
                        <Button
                            style={{ background: '#0139FD', color: '#fff' }}
                            onClick={this.showConfirm}>
                            提交
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddList
