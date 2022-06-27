import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class RickAndMortyModule { }
