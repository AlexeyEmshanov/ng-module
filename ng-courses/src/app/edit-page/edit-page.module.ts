import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from '../core/components/header/header.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';



@NgModule({
  declarations: [
    EditPageComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [ EditPageComponent, HeaderComponent, FooterComponent, ],
  providers: [ ],
})
export class EditPageModule { }
