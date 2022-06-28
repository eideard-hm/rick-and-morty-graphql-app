import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterCardComponent } from './character-card/character-card.component';


@NgModule({
  declarations: [
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CharacterCardComponent
  ]
})
export class ComponentsModule { }
