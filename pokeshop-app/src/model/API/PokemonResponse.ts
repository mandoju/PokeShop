import { NamedAPIResource } from './NamedAPIResource';

export interface PokemonResponse {
  abilities: PokemonAbility[];
  base_experience: number;
  height: number;
  id: number;
  moves: PokemonMove[];
  name: string;
  order: number;
  sprites: PokemonSprites
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export interface PokemonAbility {
  slot: number;
  is_hidden: boolean;
  ability: NamedAPIResource;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: {
    learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
  }[];
}

export interface PokemonSprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface PokemonStat {
    baseState: number;
    effort: number;
    state: NamedAPIResource;
}

export interface PokemonType {
    slow: number;
    type: NamedAPIResource
}