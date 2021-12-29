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

  findParent(question: Question) : Question | undefined{

    for (const q of this.questions) {
      const parent = this.findParentRecursive(question.id, q);
      if(parent) return parent
    }
    return undefined
    
  }

  changeAnswer(questionId: number, answer: string){

  }



  private findParentRecursive(questionId: number,question: Question) : Question | undefined{

    if(question.childItems){
      const result = question.childItems.find(q => q.id === questionId)  // check if the current question is the parent for the searching questionId
      if(result) return  question;
  
      for (const q of question.childItems) { // keep searching the childItems untill you find
        const parent = this.findParentRecursive(questionId, q);
        if(parent) return parent;
      }
    }
    return undefined // noting found doesnt have a parent
  
     
   
    
  }



  
}
