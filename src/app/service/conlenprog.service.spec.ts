import { TestBed } from '@angular/core/testing';

import { ConlenprogService } from './conlenprog.service';

describe('ConlenprogService', () => {
  let service: ConlenprogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConlenprogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
