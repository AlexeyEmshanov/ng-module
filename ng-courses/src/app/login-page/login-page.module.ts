import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from '../core/components/header/header.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
  ],
  exports: [LoginPageComponent, HeaderComponent, FooterComponent],
  providers: [AuthService],
})
export class LoginPageModule { }
