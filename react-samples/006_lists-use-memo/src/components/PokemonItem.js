import React from 'react'

const PokemonItem = ({ pokemonIdx }) => {
  const pokemonImageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    pokemonIdx + 1
  }.png`
  return (
    <div>
      <img className="pokemon-image" src={pokemonImageSrc} alt="pokemon" />
      <p>{pokemonIdx + 1}</p>
    </div>
  )
}
export default PokemonItem
