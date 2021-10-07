import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthService } from '../services/auth.service';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ HeaderComponent, FooterComponent, LogoComponent ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [ HeaderComponent, FooterComponent, LogoComponent ],
  providers: [ AuthService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CoreModule { }
