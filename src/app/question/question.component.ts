import { Component, Input, OnInit,  ChangeDetectionStrategy } from '@angular/core';
import { Question } from 'src/models/types';
import { QuestionsStoreService } from 'src/services/questions-store.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  

  constructor(public questionsStoreService: QuestionsStoreService) { }

  @Input()
  question!: Question; 

  ngOnInit(): void {
    this.questionsStoreService.questions$.subscribe(console.log);
  }

  public onAnswerUpdate(answer: string){
    this.questionsStoreService.updateAnswer(this.question.id, answer)
  }



}
