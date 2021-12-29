import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { QuestionsStoreService } from 'src/services/questions-store.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnaireComponent{

  
  constructor(public questionsStoreService: QuestionsStoreService) { }


  public onAnswerUpdate(questionId: number, answer: string){
    this.questionsStoreService.updateAnswer(questionId, answer)
  }

}
