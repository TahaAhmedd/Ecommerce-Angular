import { TestBed } from '@angular/core/testing';

import { SproductService } from './sproduct.service';

describe('SproductService', () => {
  let service: SproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
