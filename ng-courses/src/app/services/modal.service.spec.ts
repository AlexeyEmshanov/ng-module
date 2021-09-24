import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('showModalWindow() should switch isModalShown to true', () => {
    service.showModalWindow();
    expect(service.isModalShown).toBeTrue();
  });

  it('hideModalWindow() should switch isModalShown to false', () => {
    service.hideModalWindow();
    expect(service.isModalShown).toBeFalse();
  });

  it('getIsModalShown() should return actual isModalShown value', () => {
    const responseBefore = service.getIsModalShown();
    expect(service.isModalShown).toBe(responseBefore);

    (service.isModalShown) ? service.hideModalWindow() : service.showModalWindow();
    const responseAfter = service.getIsModalShown();
    expect(service.isModalShown).toBe(responseAfter);
  });

});
