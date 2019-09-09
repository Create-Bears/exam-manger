import * as React from 'react'
import { Select, Button, Table, Input } from 'antd'
import { inject, observer } from 'mobx-react'
import './index.css'

const { Option } = Select;
interface Props {
  classmanger: any
}

@inject('classmanger')
@observer

class StudentManger extends React.Component<Props>{
  state = {
    columns: [
      {
        title: '姓名',
        dataIndex: 'student_name'
      },
      {
        title: '学号',
        dataIndex: 'student_id'
      },
      {
        title: '班级',
        dataIndex: 'grade_name'
      },
      {
        title: '教室',
        dataIndex: 'room_text'
      },
      {
        title: '密码',
        dataIndex: 'student_pwd'
      },
      {
        title: '操作',
        dataIndex: 'index',
        render: () => <a>删除</a>
      },
    ],
    data: [],
    classList: [],
    studentClassList: [],
  }
  componentDidMount() {
    this.getList()
  }
  getList = async () => {
    let { getStudentClass, getClasses, getClassManger } = this.props.classmanger;
    let result = await getStudentClass();
    let classListData = await getClasses();
    let classMangerList = await getClassManger()
    console.log(classMangerList)
    result.data.map((item: any, index: number) => item.key = index)
    if (result.code === 1) {
      this.setState({
        data: result.data,
        classList: classListData.data,
        studentClassList: classMangerList.data
      })
    }
  }
  render() {
    let { columns, data,classList,studentClassList } = this.state;

    return (
      <div>
        <h2 className="adduser-title">学生管理</h2>
        <div>
          <div className="student-top">
            <div className="student-top-item">
              <Input placeholder="输入学生姓名"/>
            </div>
            <div className="student-top-item">
              <Select placeholder="请选择教室号" style={{ width: 160 }}>
                {
                  classList.map((item:any,index:number)=>{
                    return <Option key={index} value={item.room_id}>{item.room_text}</Option>
                  })
                }
              </Select>
            </div>
            <div className="student-top-item">
              <Select placeholder="班级名" style={{ width: 160 }}>
              {
                  studentClassList.map((item:any,index:number)=>{
                    return <Option key={index} value={item.grade_id}>{item.grade_name}</Option>
                  })
                }
              </Select>
            </div>
            <div className="student-top-item"><Button className="student-btn">搜索</Button></div>
            <div className="student-top-item"><Button className="student-btn">重置</Button></div>

          </div>
          <div className="student-bottom">
            <Table dataSource={data} columns={columns} />
          </div>
        </div>
      </div>
    )
  }
}
export default StudentManger