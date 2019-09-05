import * as React from 'react';
import { inject, observer } from 'mobx-react';
import './index.css';
import { Layout, Select, Button } from 'antd';
const { Option } = Select;

interface Props {
	question: any;
}

@inject('question')
@observer
class CheckTextQuestion extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}
	state = {
        topList: [],
        examQuestion:[],
	};
	componentDidMount() {
		this.getList();
	}
	getList = async () => {
		const { getQuestionSubject ,getQuestionExam} = this.props.question;
		let result = await getQuestionSubject();
        let resultList = await getQuestionExam();
        console.log(resultList)
		this.setState({
            topList: result.data,
            examQuestion:resultList.data
		});
	};
	public render() {
		return (
			<div>
				<h1>查看试题</h1>
				<div className="ant-top">
                    <div className='top-list'>
						<span>课程类型:</span>
						<span>All</span>
						{this.state.topList.map((item: any, index) => {
							return (
								<div className='item-con' key={index}>
									<span>{item.subject_text}</span>
								</div>
							);
						})}
					</div>
					<div className="topList-b">
						<div>
							考试类型:
							<Select defaultValue='' style={{ width: 120 }}>
								<Option value='周考一'>周考一</Option>
								<Option value='周考二'>周考二</Option>
								<Option value='周考三'>周考三</Option>
								<Option value='月考'>月考</Option>
							</Select>
						</div>
						<div>
							题目类型:
							<Select defaultValue='' style={{ width: 120 }}>
								<Option value='周考一'>周考一</Option>
								<Option value='周考二'>周考二</Option>
								<Option value='周考三'>周考三</Option>
								<Option value='月考'>月考</Option>
							</Select>
						</div>
						<div>
							<Button type='primary' icon='search'>
								查询
							</Button>
						</div>
					</div>
                </div>
					
				
                <Layout>
                    <div className="ant-list">
                        {this.state.examQuestion.map((item:any,index:number)=>{
                            return <div className="antd-list-item" key={index}>
                                <div className="antd-list-item-l">
                                    <div className="antd-list-item-l-t">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="antd-list-item-l-b">
                                        <div>
                                            <div className="ant-tag ant-tag-blue">{item.questions_type_text}</div>
                                            <div className="ant-tag ant-tag-geekblue">{item.subject_text}</div>
                                            <div className="ant-tag ant-tag-orange">{item.exam_name}</div>
                                        </div>
                                        <span>{item.user_name}发布</span>
                                    </div>
                                </div>
                                <ul className="antd-list-item-r">
                                    <li>编辑</li>
                                </ul>
                            </div>
                        })} 
                    </div>   
                </Layout>
			</div>
		);
	}
}

export default CheckTextQuestion;
