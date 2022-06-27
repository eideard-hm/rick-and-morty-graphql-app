import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterCardComponent } from './character-card/character-card.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    CharacterCardComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CharacterCardComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
