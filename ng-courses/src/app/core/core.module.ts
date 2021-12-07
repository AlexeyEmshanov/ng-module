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
import {  hydrationMetaReducer } from './+store/users/users.reducer';

export const metaReducers: MetaReducer[] = [ hydrationMetaReducer ]

@NgModule({
  declarations: [  ],
  imports: [
    AppRoutingModule,
    CoreStoreModule,
    StoreModule.forFeature( usersStore.usersFeatureKey, usersStore.usersReducer, { metaReducers} ),
  ],
  exports: [ AppRoutingModule, CoreStoreModule ],
  providers: [  ],
})
export class CoreModule { }
