import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreStoreModule } from './+store/core-store.module';
import { StoreModule } from '@ngrx/store';
import * as usersStore from './+store/users/users.reducer';



@NgModule({
  declarations: [  ],
  imports: [
    // CommonModule,
    // FormsModule,
    AppRoutingModule,
    CoreStoreModule,
    StoreModule.forFeature( usersStore.usersFeatureKey, usersStore.usersReducer )
  ],
  exports: [ AppRoutingModule, CoreStoreModule ],
  providers: [ AuthService ],
})
export class CoreModule { }
