import { TestBed } from '@angular/core/testing';

import { TrainigsService } from './trainings.service';

describe('TrainigsService', () => {
  let service: TrainigsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainigsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
