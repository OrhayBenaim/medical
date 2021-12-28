import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() changed = new EventEmitter<string>();
  async ngOnInit() {
    
    if(this.question.parentAnswer){  
      const parent = await this.questionsStoreService.findParent(this.question);
      
      if(parent?.answer === this.question.parentAnswer) this.question.visible = true;
      
    }
    else{
      this.question.visible = true;
    }
    
  }

  onChange(value: string){
    // this.questionsStoreService.
  }

}
