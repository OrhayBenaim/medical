import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/models/types';
import { QuestionsStoreService } from 'src/services/questions-store.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  constructor(public questionsStoreService: QuestionsStoreService) { }

  @Input()
  questions: Question[] | null = [];

  ngOnInit(): void {
    
  }

}
