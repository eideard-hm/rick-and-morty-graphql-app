import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { EpisodesResult } from '@rickAndMorty/interfaces/rick-and-morty.interface';
import { RickAndMortyService } from '@rickAndMorty/services/rick-and-morty.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes$!: Observable<EpisodesResult[]>;
  loading$!: Observable<boolean>;

  constructor(private readonly rickAndMortySvc: RickAndMortyService) { }

  ngOnInit(): void {
    this.loading();
    this.getEpisodes();
  }

  getEpisodes(): void {
    this.episodes$ = this.rickAndMortySvc.episodes$;
  }

  loading(): void {
    this.loading$ = this.rickAndMortySvc.loading$;
  }
}
