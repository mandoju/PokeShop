import { PokemonResponse } from './API/PokemonResponse';

/**
 * Interface que representa um pokemon na loja
 */
export interface PokemonShopInfo extends PokemonResponse {
  price: number; // Preço do pokemon
}
