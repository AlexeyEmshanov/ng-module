import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading-window',
  templateUrl: './loading-window.component.html',
  styleUrls: ['./loading-window.component.scss']
})
export class LoadingWindowComponent implements OnInit {
  public isLoading$?: Observable<boolean>;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.isLoading$ = this.loadingService.loadingSubject;
  }
}
