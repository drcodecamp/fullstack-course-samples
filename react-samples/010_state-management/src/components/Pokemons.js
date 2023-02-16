import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons } from '../store/pokemonSlice'
import { useEffect } from 'react'

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!pokemons.length) {
      setTimeout(() => {
        dispatch(fetchPokemons())
      }, 3000)
    }
  })
  return (
    <div>
      <h1>Pokemons!</h1>
      {!pokemons.length && <div>Loading...</div>}
      {pokemons &&
        pokemons.map((pokemon, i) => (
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
