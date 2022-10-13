import { TestBed } from '@angular/core/testing';

import { CarrtService } from './carrt.service';

describe('CarrtService', () => {
  let service: CarrtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
