import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ BreadcrumbsComponent ],
  imports: [
    SharedModule,
  ],
  exports: [ BreadcrumbsComponent ]
})
export class BreadcrumbsModule { }
