import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
