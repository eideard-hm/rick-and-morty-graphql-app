import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, switchMap } from 'rxjs';

import { RickAndMortyService } from '@rickAndMorty/services/rick-and-morty.service';
import { CharactersResult } from '@rickAndMorty/interfaces/rick-and-morty.interface';

@Component({
  selector: 'app-chacter-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character$!: Observable<CharactersResult | undefined>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly rickAndMortySvc: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.getCharacterById();
  }

  private getCharacterById() {
    this.route.params
    .pipe(
      switchMap(({id}) => this.character$ = this.rickAndMortySvc.getCharacterById(id))
    )
    .subscribe()
  }
}
