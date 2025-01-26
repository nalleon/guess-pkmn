import { onMounted, ref } from 'vue'
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
  const selectedPokemons = ref<Set<number>>(new Set());

  const getPokemon = async (): Promise<Pokemon[]> => {
    const pokeApi = new PokemonApi()
    const response = await pokeApi.get('649')

    const pokedex = response.data.results.map((pokemon: PokemonAuxDataType) => {
      const url = pokemon.url.split('/')
      const pokedexNum = url[url.length - 2] ?? 0
      return {
        id: +pokedexNum,
        name: pokemon.name,
      }
    })
    
    return pokedex
  }

  onMounted(async () => {
    const pokedex = await getPokemon()
    console.log(pokedex)
  })

  return {
    gameStatus,
  }
}
