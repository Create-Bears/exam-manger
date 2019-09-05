import { action, observable } from 'mobx';
import {
	getQuestionsType,
	getQuestionSubject,
	getQuestionExam
} from '../../service/index';

class Question {
	@observable topList: any = [];

	@action async getQuestionsType(params: any): Promise<any> {
		let result: any = await getQuestionsType(params);
		return result;
	}
	@action async getQuestionSubject(): Promise<any> {
		let result: any = await getQuestionSubject();
		return result;
	}
	@action async getQuestionExam(params: any): Promise<any> {
        let result: any = await getQuestionExam(params);
        console.log(result)
		return result;
	}
}

export default Question;
