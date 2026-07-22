import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { ChefService } from './chef';

describe('ChefService', () => {
  let service: ChefService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(ChefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
