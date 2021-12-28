import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/models/types';
import QuestionsData from 'src/assets/Questions.json';

@Injectable({
  providedIn: 'root'
})
export class QuestionsStoreService {
  
  private readonly _questions = new BehaviorSubject<Question[]>(QuestionsData.patientQuestions as Question[]);
  
  readonly questions$ = this._questions.asObservable();


  get questions(): Question[]{
    return this._questions.getValue()
  }

  set questions(questions: Question[]) {
    this._questions.next(questions);
  }

  async findParent(question: Question){
    const parent = this.questions.find(q => this.findParentRecursive(question.id, q));
    // console.log({question , parent});
    
    return parent
    
  }

  changeAnswer(questionId: number, answer: string){

  }

  private findParentRecursive(questionId: number,question: Question){
   
    const foundQuestion = this.FindRecursive(questionId, question);
    console.log(questionId, question, foundQuestion);
    
    if(foundQuestion && foundQuestion.id === questionId) return question;

    return undefined
  }


  private FindRecursive(questionId: number,question: Question) : Question | undefined{
    
    if(question.id === questionId) return question;
  
    let foundQuestion = undefined;
    if(question.childItems){

      for (const q of question.childItems) {
        foundQuestion = this.FindRecursive(questionId, q);
        if(foundQuestion) break;
      }
     
    }1
    
    return foundQuestion;
  }



  
}
