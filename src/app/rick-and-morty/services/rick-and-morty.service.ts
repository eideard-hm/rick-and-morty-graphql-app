import { Injectable } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';

import { CharactersResult, EpisodesResult } from '../interfaces/rick-and-morty.interface';

const GET_CHARACTERS_AND_EPISODES = gql`
  {
    episodes{
      results {
        name
        episode
      }
    }

    characters{
      results {
        id
        name
        status
        species
        gender
        origin{
          name
        }
        location{
          name
        }
        image
      }
    }
  }
`

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private episodesSubject = new BehaviorSubject<EpisodesResult[]>([]);
  private charactersSubject = new BehaviorSubject<CharactersResult[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private readonly apollo: Apollo) {
    this.getEpisoresAndCharacters();
  }

  get episodes$(): Observable<any[]> {
    return this.episodesSubject.asObservable();
  }

  get characters$(): Observable<any[]> {
    return this.charactersSubject.asObservable();
  }

  get loading$(): Observable<boolean> {
    return this.loadingSubject.asObservable()
  };

  private getEpisoresAndCharacters() {
    this.apollo.watchQuery({
      query: GET_CHARACTERS_AND_EPISODES
    })
      .valueChanges
      .subscribe(({ data, loading }: any) => {
        this.episodesSubject.next(data.episodes.results);
        this.charactersSubject.next(data.characters.results);
        this.loadingSubject.next(loading);
      });
  }
}
