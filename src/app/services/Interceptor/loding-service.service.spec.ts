import { TestBed } from '@angular/core/testing';

import { LodingServiceService } from './loding-service.service';

describe('LodingServiceService', () => {
  let service: LodingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LodingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
