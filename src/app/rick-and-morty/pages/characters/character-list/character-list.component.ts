import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Observable } from 'rxjs';

import { CharactersResult } from '@rickAndMorty/interfaces/rick-and-morty.interface';
import { RickAndMortyService } from '@rickAndMorty/services/rick-and-morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  showButtonUp: boolean = false;

  characters$!: Observable<CharactersResult[]>;
  loading$!: Observable<boolean>;

  private scrollHeight: number = 500;
  private pageNumber: number = 1;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly rickandMortySvc: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.loading();
    this.getCharacters();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;

    this.showButtonUp = (yOffset || scrollTop) > this.scrollHeight;
  }

  getCharacters() {
    this.characters$ = this.rickandMortySvc.characters$;
  }

  loading() {
    this.loading$ = this.rickandMortySvc.loading$;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrolled(): void {
    this.pageNumber++;
    this.rickandMortySvc.getChactersByPage(this.pageNumber);
    this.getCharacters();
  }
}
