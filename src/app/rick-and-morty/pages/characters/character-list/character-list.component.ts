import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CharactersResult } from '@rickAndMorty/interfaces/rick-and-morty.interface';
import { RickAndMortyService } from '@rickAndMorty/services/rick-and-morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters$!: Observable<CharactersResult[]>;
  loading$!: Observable<boolean>;

  constructor(private readonly rickandMortySvc: RickAndMortyService) { }

  ngOnInit(): void {
    this.loading();
    this.getCharacters();
  }

  getCharacters() {
    this.characters$ = this.rickandMortySvc.characters$;
  }

  loading(){
    this.loading$ = this.rickandMortySvc.loading$;
  }

}
