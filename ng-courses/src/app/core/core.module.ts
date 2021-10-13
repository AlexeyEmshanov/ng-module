import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { LogoComponent } from '../shared/components/logo/logo.component';
import { AuthService } from '../services/auth.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [  ],
  imports: [
    // CommonModule,
    // FormsModule,
    AppRoutingModule
  ],
  exports: [ AppRoutingModule ],
  providers: [ AuthService ],
})
export class CoreModule { }
