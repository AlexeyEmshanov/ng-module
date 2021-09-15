import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnChanges {
  @Input() public isModalShown = false;

  @Output() declineDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() acceptDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  // ngOnInit(): void {
  //   console.log('modal window open');
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHANGES', changes);

  }

  onAccept() {
    this.acceptDelete.emit();
  }

  onDecline() {
    this.declineDelete.emit();
  }

}
