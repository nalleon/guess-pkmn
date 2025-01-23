import {onMounted, ref} from 'vue';
import { GameStatus } from '../interfaces';
import { PokemonApi } from '../pokemonApi';

type Pokemon = {
  name: string;
  url: string;
}

type Pokedex = {
  list : Pokemon[]
}

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  const getPokemon = async () => {
    const pokeApi = new PokemonApi();
    const response = await pokeApi.get('/?limit=649');
    const pokedex : Pokedex = response.data;
    console.log(pokedex.list);
  }

  onMounted(()=>{
    getPokemon();
  });

  return {
    gameStatus
  }
}
