import { PokemonResponse } from "./API/PokemonResponse";

export interface PokemonShopInfo extends PokemonResponse {
    price: number;
}