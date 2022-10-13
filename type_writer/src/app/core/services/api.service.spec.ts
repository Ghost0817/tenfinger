import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule],providers: [HttpClient]});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get and return an data', fakeAsync(() => {
    const resposeData =service.get('get').toPromise();
    expect(resposeData).toMatch('Hello World');

  }));

  it('should call put and return an data', () => {
  });

  it('should call post and return an data', () => {
  });

  it('should call delete and return an data', () => {
  });
});
