import { TestBed } from '@angular/core/testing';

import { SandboxApiService } from './sandboxApi.service';

describe('SandboxApiService', () => {
  let service: SandboxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandboxApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
