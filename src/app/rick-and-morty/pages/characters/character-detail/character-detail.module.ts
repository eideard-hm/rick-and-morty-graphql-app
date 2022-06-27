import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './character-detail.component';


@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    ChacterDetailRoutingModule
  ]
})
export class ChacterDetailModule { }
