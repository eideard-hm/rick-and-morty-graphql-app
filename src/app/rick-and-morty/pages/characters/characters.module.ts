import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './characters-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
