import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './character-detail.component';
import { ComponentsModule } from '@rickAndMorty/components/components.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    ChacterDetailRoutingModule,
    CommonModule,
    ComponentsModule,
    SharedModule
  ]
})
export class ChacterDetailModule { }
