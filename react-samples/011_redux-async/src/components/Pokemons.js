import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons, fetchPokemonsWithThunk } from '../store/pokemonSlice'
import { useEffect } from 'react'

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons.items)
  const isLoading = useSelector((state) => state.pokemons.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!pokemons.length) {
      setTimeout(() => {
        dispatch(fetchPokemonsWithThunk())
      }, 3000)
    }
  }, [])

  return (
    <div>
      <h1>Pokemons!</h1>
      {isLoading && <h1>Loading...</h1>}
      {pokemons.map((pokemon, i) => (
        <div key={pokemon.name}>
          Pokemon name: {pokemon.name}
          <img
            width={100}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
              i + 1
            }.png`}
            alt={pokemon.name}
          />
        </div>
      ))}
    </div>
  )
}

export default Pokemons
