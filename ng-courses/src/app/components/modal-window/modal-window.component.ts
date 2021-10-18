import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

export const testAnimation = trigger('fadeInOut', [
  transition(':enter', [
    animate('200ms ease-in', style({opacity: 1}))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({opacity: 0}))
  ])
])

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  animations: [ testAnimation ],
})

export class ModalWindowComponent implements OnInit{

  @Output() declineDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() acceptDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  public idToDelete: number = 0;

  public isModalShown = false;

  public acceptDeleteModal = true

  constructor() { }

  ngOnInit(): void {
    this.isModalShown = false;
  }

  onAccept() {
    this.acceptDelete.emit();
    this.hideModalWindow();
  }

  onDecline() {
    this.declineDelete.emit();
  }

  public showModalWindow(): void {
    this.isModalShown = true;
  }

  public hideModalWindow(): void {
    this.isModalShown = false;
  }

  public testMethod() {
    return "i'm modal window"
  }

}
