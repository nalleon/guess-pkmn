import axios from 'axios'
//https://pokeapi.co/api/v2/pokemon?limit=649&offset=0

export class PokemonApi {
  async get(limit: string) {
    const response = axios.get('https://pokeapi.co/api/v2/pokemon' + limit + '&offset=0')
    return await response
  }
}
