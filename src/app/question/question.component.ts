import { Component, Input, OnInit,  ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/types';
import { QuestionsStoreService } from 'src/services/questions-store.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit {
  

  constructor(public questionsStoreService: QuestionsStoreService) { }

  @Input()
  question!: Question; 

  @Output() changedAnswer = new EventEmitter<string>();

  ngOnInit(): void {
      
  }




}
