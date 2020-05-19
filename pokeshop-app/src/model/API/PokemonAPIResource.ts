import { NamedAPIResource } from './NamedAPIResource';

/**
 * Recurso do pokemon retornado dentro do request /type
 */
export interface PokemonAPIResource {
  slot: number;
  pokemon: NamedAPIResource[];
}
