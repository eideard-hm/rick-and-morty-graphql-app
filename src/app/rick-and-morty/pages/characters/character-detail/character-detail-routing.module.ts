import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterDetailComponent } from './character-detail.component';

const routes: Routes = [{ path: '', component: CharacterDetailComponent, title: 'Character Detail - Rick An Morty App' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChacterDetailRoutingModule { }
