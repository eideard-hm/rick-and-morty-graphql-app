import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@rickAndMorty/components/components.module';
import { ChacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';


@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    ChacterListRoutingModule,
    ComponentsModule
  ]
})
export class ChacterListModule { }
