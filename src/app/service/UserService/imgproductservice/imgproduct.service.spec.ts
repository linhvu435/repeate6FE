import { TestBed } from '@angular/core/testing';

import { ImgproductService } from './imgproduct.service';

describe('ImgproductService', () => {
  let service: ImgproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
