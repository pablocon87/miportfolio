import { TestBed } from '@angular/core/testing';

import { ConsisopService } from './consisop.service';

describe('ConsisopService', () => {
  let service: ConsisopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsisopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
