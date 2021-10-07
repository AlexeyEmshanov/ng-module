import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AddPageComponent } from './components/add-page/add-page.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { FooterComponent } from '../core/components/footer/footer.component';



@NgModule({
  declarations: [
    AddPageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  exports: [ AddPageComponent, HeaderComponent, FooterComponent ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AddPageModule { }
