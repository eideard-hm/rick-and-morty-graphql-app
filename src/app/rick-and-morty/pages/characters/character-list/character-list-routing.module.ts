import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list.component';

const routes: Routes = [{ path: '', component: CharacterListComponent, title: 'Characters List - Rick An Morty App' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChacterListRoutingModule { }
