import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Question } from 'src/models/types';
import { QuestionsStoreService } from 'src/services/questions-store.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnaireComponent{

  
  constructor(public questionsStoreService: QuestionsStoreService) {
    
   }

  public questions: Question[] = [];
  ngOnInit(): void {
    this.questionsStoreService.questions$.subscribe(questions =>{
      this.questions = questions;
    });
  }

}
