import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AddPageComponent } from './components/add-page/add-page.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddPageComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [ AddPageComponent, HeaderComponent, FooterComponent ],
  providers: [],
})
export class AddPageModule { }
