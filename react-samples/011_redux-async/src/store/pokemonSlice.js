import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPokemons } from '../api/pokemonAPI'

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    items: [],
    isLoading: true,
    hasError: false,
  },
  reducers: {
    setPokemons: (state, action) => {
      return action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonsWithThunk.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(fetchPokemonsWithThunk.fulfilled, (state, action) => {
      state.items = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchPokemonsWithThunk.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
  },
})

export const { setPokemons } = pokemonSlice.actions

// First, create the thunk
export const fetchPokemonsWithThunk = createAsyncThunk('pokemon/fetchPokemons', async () => {
  return await fetchPokemons()
})

export default pokemonSlice.reducer
