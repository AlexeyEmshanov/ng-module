import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('showLoadingWindow() should emit subject value equal to true', () => {
    spyOn(service.loadingSubject, 'next');
    service.showLoadingWindow();

    expect(service.loadingSubject.next).toHaveBeenCalledWith(true);
  })

  it('hideLoadingWindow() should emit subject value equal to true', () => {
    spyOn(service.loadingSubject, 'next');
    service.hideLoadingWindow();

    expect(service.loadingSubject.next).toHaveBeenCalledWith(false);
  })
});
