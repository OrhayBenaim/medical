import { Component } from '@angular/core';
import { QuestionsStoreService } from 'src/services/questions-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medical';
  
  constructor(public questionsStoreService: QuestionsStoreService) {}
}
