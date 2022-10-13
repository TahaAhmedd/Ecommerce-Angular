import { TestBed } from '@angular/core/testing';

import { PrmothinAdsService } from './prmothin-ads.service';

describe('PrmothinAdsService', () => {
  let service: PrmothinAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrmothinAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
