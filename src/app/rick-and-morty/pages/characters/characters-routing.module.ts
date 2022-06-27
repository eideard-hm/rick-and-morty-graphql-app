import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters-list',
    loadChildren: () => import('./character-list/character-list.module').then(m => m.ChacterListModule)
  },
  {
    path: 'character-detail/:id',
    loadChildren: () => import('./character-detail/character-detail.module').then(m => m.ChacterDetailModule)
  },
  {
    path: '**',
    redirectTo: 'characters-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
