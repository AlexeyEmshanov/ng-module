import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaReducer, META_REDUCERS, StoreModule } from '@ngrx/store';
import { hydrationMetaReducer2, usersReducer } from './users/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users/users.effects';

export const metaReducersCustom: MetaReducer[] = [ hydrationMetaReducer2 ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ users: usersReducer },),
    EffectsModule.forRoot([ UsersEffects ])
  ],
  providers: [ ]
})
export class CoreStoreModule { }
