import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        age: 0,
        specs: {
            speed: 0,
            health: 200,
        },
        games: ['dota', 'battlefield'],
    },
    reducers: {
        addGame: (state, action) => {
            state.games.push(action.payload)
        },
        removeGame: (state, action) => {
            state.games.splice(action.payload, 1)
        },
    },
})

export const { removeGame, addGame } = userSlice.actions

export default userSlice.reducer
