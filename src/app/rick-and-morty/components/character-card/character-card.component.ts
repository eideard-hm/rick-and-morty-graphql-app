import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CharactersResult } from '@rickAndMorty/interfaces/rick-and-morty.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {

  @Input() character!: CharactersResult;

  constructor() { }

  getIcon(): string {
    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }

  toggleFavorite(): void {
    // this.character.isFavorite = !this.character.isFavorite;
  }
}
