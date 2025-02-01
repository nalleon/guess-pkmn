import { computed, h, onMounted, ref } from 'vue'
import { GameStatus } from '../interfaces'
import { PokemonApi } from '../api/pokemonApi'
import type { Pokemon } from '../interfaces/pokemon.interface'

export interface Pokedex {
  count: number
  next: string
  previous: null
  results: PokemonAuxDataType[]
}

export interface PokemonAuxDataType {
  name: string
  url: string
}

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);

  const isLoading = computed(() => pokemons.value.length === 0);

  const pokemonOptions = ref<Pokemon[]>([]);

  const getNextOptions = (howMany : number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  }

  const getRndPokemon = computed(()=> {
    const rndIndex = Math.trunc(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[rndIndex]
  });

  const getPokemon = async (): Promise<Pokemon[]> => {
    const pokeApi = new PokemonApi()
    const response = await pokeApi.get('251')


    const pokedex = response.data.results.map((pokemon: PokemonAuxDataType) => {
      const url = pokemon.url.split('/')
      const pokedexNum = url[url.length - 2] ?? 0
      return {
        id: +pokedexNum,
        name: pokemon.name,
      }
    })
    

    const randomizedPokedex = pokedex.sort(() => Math.random() - 0.5)

    return randomizedPokedex
  }

  onMounted(async () => {
    pokemons.value = await getPokemon();
    console.log("Antes:", pokemonOptions.value);
    getNextOptions();
    console.log("Después:", pokemonOptions.value);
  })

  return {
    gameStatus,
    isLoading,
    getNextOptions,
    pokemonOptions,
    getRndPokemon
  }
}
