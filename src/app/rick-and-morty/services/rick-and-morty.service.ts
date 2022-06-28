import { Injectable } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, find, map, Observable, pluck, take, withLatestFrom, mergeMap } from 'rxjs';

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

const GET_CHARACTERS_BY_PAGE = gql`
  query GetCharactersByPage($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        location {
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

  get episodes$(): Observable<EpisodesResult[]> {
    return this.episodesSubject.asObservable();
  }

  get characters$(): Observable<CharactersResult[]> {
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

  getChactersByPage(page: number): void {
    this.apollo.watchQuery({
      query: GET_CHARACTERS_BY_PAGE,
      variables: {
        page
      }
    })
    .valueChanges
    .pipe(
      take(1),
      pluck('data', 'characters'),
      withLatestFrom(this.characters$),
      map(([newCharacters, oldCharacters]: any) => [...oldCharacters, ...newCharacters.results]),
    )
    .subscribe((res) => this.charactersSubject.next(res));
  }

  getCharacterById(characterId: number): Observable<CharactersResult | undefined> {
    return this.characters$
    .pipe(
      mergeMap((characters: CharactersResult[]) => characters),
      find((character: CharactersResult) => character.id === characterId),
    );
  }
}
