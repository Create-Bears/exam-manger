import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Select ,Button} from 'antd'
import './index.css'

const { Option} = Select;
interface Props {
  question: any
}

@inject('question')
@observer

class QuestionList extends React.Component<Props> {
  state = {
    topList: [],
    examType: [],
  }
  componentDidMount() {
    this.getList()
  }
  getList = async () => {
    const {
      getQuestionSubject,
      getQuestionTypes
    } = this.props.question
    let result = await getQuestionSubject()
    let examList = await getQuestionTypes()
    this.setState({
      topList: result.data,
      examType: examList.data
    })
  }
  render() {
    return (
      <div>
        <h2 className="adduser-title">试卷列表</h2>
        <div className="questionList-top">
          <div style={{ fontSize: '13px' }} className="questionList-top-item">
            <b>考试类型</b>:
            <Select defaultValue="" style={{ width: 200 }} onChange={(value: any) => {
                // console.log(value)
                this.setState({
                  val: value
                })
              }}>
                {this.state.examType.map(
                  (item: any, index) => {
                    return (
                      <Option value={item.exam_name} key={index}>
                        {item.exam_name}
                      </Option>
                    )
                  }
                )}
            </Select>
          </div>
          <div style={{ fontSize: '13px' }} className="questionList-top-item">
            <b>题目类型</b>:
            <Select defaultValue="" style={{ width: 200 }} onChange={(value: any) => {
                // console.log(value)
                this.setState({
                  vals: value
                })
              }}>
                {this.state.topList.map(
                  (item: any, index) => {
                    return (
                      <Option value={item.subject_id}
                        key={index}>
                        {item.subject_text}
                      </Option>
                    )
                  }
                )}
            </Select>
          </div>
          <div className="questionList-top-item">
            <Button style={{padding:" 0 40px"}} type="primary" icon="search">查询</Button>
          </div>
        </div>
        <div className="questionList-bottom">
                   
        </div>
      </div>
    )
  }
}

export default QuestionList