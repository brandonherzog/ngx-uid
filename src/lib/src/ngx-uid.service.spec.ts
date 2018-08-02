import { TestBed, inject } from '@angular/core/testing';

import { NgxUidService, NgxUidDefaultService } from './ngx-uid.service';

describe('NgxUidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: NgxUidService, useClass: NgxUidDefaultService} ],
    });
  });

  it('should create service', inject([NgxUidService], (service: NgxUidService) => {
    expect(service).toBeTruthy();
  }));

  it('should return different ids', inject([NgxUidService], (service: NgxUidService) => {
    expect(service.next()).not.toEqual(service.next());
  }));
});
