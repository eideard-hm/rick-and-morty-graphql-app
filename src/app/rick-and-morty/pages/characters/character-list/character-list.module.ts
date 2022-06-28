import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ComponentsModule } from '@rickAndMorty/components/components.module';
import { ChacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    ChacterListRoutingModule,
    CommonModule,
    ComponentsModule,
    InfiniteScrollModule,
    SharedModule,
  ]
})
export class ChacterListModule { }
