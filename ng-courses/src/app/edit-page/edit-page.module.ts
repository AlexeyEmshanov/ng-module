import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { BreadcrumbsComponent } from '../breadcrumbs/components/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    EditPageComponent,
  ],
  imports: [
    SharedModule,
    BreadcrumbsModule
  ],
  exports: [ EditPageComponent, HeaderComponent, FooterComponent, BreadcrumbsComponent],
  providers: [ ],
})
export class EditPageModule { }
