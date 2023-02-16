import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userSlice from './userSlice'
import pokemonSlice from './pokemonSlice'

const rootReducer = combineReducers({
    user: userSlice,
    counter: counterSlice,
    pokemons: pokemonSlice,
})

export default rootReducer
