import { NamedAPIResource } from './NamedAPIResource';
import { PokemonAPIResource } from './PokemonAPIResource';

export interface PokemonTypeResponse {
  id: number;
  name: string;
  damage_relation: DamageRelationTypeAPI;
  pokemon: PokemonAPIResource[];
}

export interface DamageRelationTypeAPI {
  no_damage_to: NamedAPIResource[];
  half_damage_to: NamedAPIResource[];
  double_damage_to: NamedAPIResource[];
  no_damage_from: NamedAPIResource[];
  half_damage_from: NamedAPIResource[];
  double_damage_from: NamedAPIResource[];
}
