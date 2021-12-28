import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/models/types';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  constructor() { }

  @Input()
  questions: Question[] | null = [];

  ngOnInit(): void {
    
  }

}
