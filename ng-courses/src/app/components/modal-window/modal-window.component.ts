import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

export const testAnimation = trigger('fadeInOut', [
  transition(':enter', [
    animate('300ms ease-in', style({opacity: 1}))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({opacity: 0}))
  ])
])

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  animations: [ testAnimation ],
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
