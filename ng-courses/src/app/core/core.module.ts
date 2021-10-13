import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthService } from '../services/auth.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ HeaderComponent, FooterComponent, LogoComponent ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [ HeaderComponent, FooterComponent, LogoComponent ],
  providers: [ AuthService ],
})
export class CoreModule { }
