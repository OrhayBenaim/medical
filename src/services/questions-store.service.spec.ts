import { TestBed } from '@angular/core/testing';

import { QuestionsStoreService } from './questions-store.service';

describe('QuestionsStoreService', () => {
  let service: QuestionsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
