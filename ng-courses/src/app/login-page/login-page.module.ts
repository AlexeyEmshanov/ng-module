import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from '../core/components/header/header.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  exports: [ LoginPageComponent, HeaderComponent, FooterComponent ],
  providers: [ AuthService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginPageModule { }
