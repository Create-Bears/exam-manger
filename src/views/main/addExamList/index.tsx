import * as React from 'react'
import {Button} from 'antd'
import './index.css'

class AddExamList extends React.Component{
  render(){
    return <div>
      <h2 className="adduser-title">创建试卷</h2>
      <div className="content">
        <Button>添加新题</Button>
      </div>
    </div>
  }
}
export default AddExamList