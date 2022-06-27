import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';


@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    ChacterListRoutingModule
  ]
})
export class ChacterListModule { }
