import { TestBed } from '@angular/core/testing';
import { ModalWindowComponent } from '../components/modal-window/modal-window.component';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [ModalWindowComponent] });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('showModalWindow() should ')
});
