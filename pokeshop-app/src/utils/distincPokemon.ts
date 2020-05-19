import { PokemonShopInfo } from '../model/PokemonShopInfo';

/**
 *
 * Função utilizada para filtrar os valores únicos de um array de ppokemon
 *
 * @param value Valor que irá ser avaliado
 * @param index Índice que do array que o valor pertence
 * @param self array de entrada
 */
export function distincPokemon(array: PokemonShopInfo[]) {
  const unique: { [id: string]: number } = {};
  const distinct = [];
  for (let i = 0; i < array.length; i++) {
    const name = array[i].name;
    if (!unique[name]) {
      distinct.push(array[i]);
      unique[name] = 1;
    }
  }
  return distinct;
}
