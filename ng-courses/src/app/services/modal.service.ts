import { Injectable, Input } from '@angular/core';
import { ModalWindowComponent } from '../components/modal-window/modal-window.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal = new ModalWindowComponent();

  constructor() { }

  showModalWindow() {
    this.modal.isModalShown = true;
  }

  hideModalWindow() {
    this.modal.isModalShown = false;
  }

  getIsModalShown() {
    return this.modal.isModalShown;
  }

}
