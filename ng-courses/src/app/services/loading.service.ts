import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loadingSubject = new BehaviorSubject(false);

  loadingStatus: Subject<boolean> = new Subject();

  constructor() {}

  public showloadingWindow() {
    this.loadingSubject.next(true);
  }

  public hideLoadingWindow() {
    this.loadingSubject.next(false);
  }


}
