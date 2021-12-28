import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Question } from 'src/models/types';
import MockQuestion from './mock.question.json';
import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  const mockQuestion = MockQuestion as Question

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.question = mockQuestion as Question;
    fixture.detectChanges();
  });

  it('question should have id', () => {
    expect(component.question.id).toBeInstanceOf(Number);
  });

  it('except question to be visible', () => {
    const questionTitle = component.question.title;

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toEqual(questionTitle);
    expect(compiled.querySelector('input[type="radio"]')).toBeTruthy();
  });
});
