import axios from 'axios'

export const fetchPokemons = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
  return response.data.results
}
