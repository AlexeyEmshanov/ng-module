import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isModalShown = false;

  constructor() { }

  showModalWindow() {
    this.isModalShown = true;
  }

  hideModalWindow() {
    this.isModalShown = false;
  }

  getIsModalShown() {
    return this.isModalShown;
  }

}
