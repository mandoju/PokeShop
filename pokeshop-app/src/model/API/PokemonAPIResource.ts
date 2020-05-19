import { NamedAPIResource } from './NamedAPIResource';

export interface PokemonAPIResource {
  slot: number;
  pokemon: NamedAPIResource[];
}
