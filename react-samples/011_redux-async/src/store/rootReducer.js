import { combineReducers } from '@reduxjs/toolkit'
import pokemonSlice from './pokemonSlice'

const rootReducer = combineReducers({
  pokemons: pokemonSlice,
})

export default rootReducer
