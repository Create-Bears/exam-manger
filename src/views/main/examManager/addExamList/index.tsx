import * as React from 'react'
import {Button} from 'antd'
import './index.css'
import {inject,observer} from 'mobx-react'
const ReactMarkdown = require('react-markdown')


interface Props{
  questions:any,
  history:any
}

@inject('examManger')
@observer

class AddExamList extends React.Component<Props>{
  state={
    questions:JSON.parse(window.localStorage.getItem('content')+'') 
  }
  handClick=()=>{
    this.props.history.push('/home/exammanager/questionList')
  }
  render(){
    console.log(this.state)
    return <div>
      <h2 className="adduser-title">创建试卷</h2>
      <div className="content">
        <Button>添加新题</Button>
        {this.state.questions.length?this.state.questions.map((item:any,index:number)=>{
            console.log(item)
            return <div key={item.questions_id} style={{border:'1px solid #ccc',marginTop:'20px',padding:'20px'}} >
               <div className="examList-title">
                  <p>{index+1}:{item.title}</p>
                  <a href="#">删除</a>
               </div>
               <ReactMarkdown source={item.questions_stem}></ReactMarkdown>
            </div>
          }):<div>暂无数据</div>}
      </div>
      <div className="btn-bigBox">
      <button className="btn-addExam" onClick={this.handClick}>创建试卷</button>
      </div>
    </div>
  }
}
export default AddExamList