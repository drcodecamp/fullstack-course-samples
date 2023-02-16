import { createSlice } from '@reduxjs/toolkit'

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        setPokemons: (state, action) => {
            return action.payload
        },
    },
})

export const { setPokemons } = pokemonSlice.actions

/**
 * Async Fetch, will catch by Middleware
 * Then execute a new action with the response data
 * as onSuccess cb function
 * */

export const fetchPokemons = () => ({
    type: 'pokemons/fetchPokemon',
    meta: {
        api: true,
    },
    payload: {
        method: 'GET',
        baseUrl: 'https://pokeapi.co/api/v2/',
        path: 'pokemon?limit=10',
        onSuccess: ({ results }) => setPokemons(results),
    },
})

export default pokemonSlice.reducer
