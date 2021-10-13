import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [ LoginPageComponent, HeaderComponent, FooterComponent ],
  providers: [ AuthService ],
})
export class LoginPageModule { }
