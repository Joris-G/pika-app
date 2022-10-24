import { TestBed } from '@angular/core/testing';

import { SubOperationService } from './sub-operation.service';

describe('SubOperationService', () => {
  let service: SubOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
