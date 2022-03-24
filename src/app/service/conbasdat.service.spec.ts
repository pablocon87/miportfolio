import { TestBed } from '@angular/core/testing';

import { ConbasdatService } from './conbasdat.service';

describe('ConbasdatService', () => {
  let service: ConbasdatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConbasdatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
