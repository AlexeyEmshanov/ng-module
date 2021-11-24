import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreStoreModule } from './+store/core-store.module';
import { MetaReducer, StoreModule } from '@ngrx/store';
import * as usersStore from './+store/users/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './+store/users/users.effects';
import {  hydrationMetaReducer2 } from './+store/users/users.reducer';

export const metaReducers: MetaReducer[] = [ hydrationMetaReducer2 ]

@NgModule({
  declarations: [  ],
  imports: [
    // CommonModule,
    // FormsModule,
    AppRoutingModule,
    CoreStoreModule,
    // StoreModule.forRoot({}, ),
    StoreModule.forFeature( usersStore.usersFeatureKey, usersStore.usersReducer, { metaReducers} ),
    // EffectsModule.forFeature([ UsersEffects ])
  ],
  exports: [ AppRoutingModule, CoreStoreModule ],
  providers: [ AuthService ],
})
export class CoreModule { }
