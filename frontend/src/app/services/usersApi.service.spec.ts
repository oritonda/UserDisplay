import { TestBed } from '@angular/core/testing';

import { UsersApiService } from './usersApi.service';

describe('UsersApiService', () => {
  let service: UsersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
