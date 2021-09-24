import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public IsModalShown = false;

  constructor() { }

  showModalWindow() {
    this.IsModalShown = true;
  }

  hideModalWindow() {
    this.IsModalShown = false;
  }

  getIsModalShown() {
    return this.IsModalShown;
  }

}
