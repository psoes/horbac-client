import { TestBed } from '@angular/core/testing';

import { ConsiderService } from './consider.service';

describe('ConsiderService', () => {
  let service: ConsiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
