import { TestBed } from '@angular/core/testing';

import { ScatigoryService } from './scatigory.service';

describe('ScatigoryService', () => {
  let service: ScatigoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScatigoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
