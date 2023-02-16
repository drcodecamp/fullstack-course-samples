import axios from 'axios'
import { setPokemons } from '../store/pokemonSlice'

export const simpleApiMiddleware = ({ dispatch }) => (next) => async (
    action
) => {
    if (!action.meta?.api) {
        return next(action)
    }
    const { payload } = action
    const { url, method, onSuccess } = payload
    next(action)
    try {
        const response = await axios({
            method,
            url,
            headers,
            timeout: 3000,
            validateStatus: () => true,
        })
        if (response.status === 200) {
            dispatch(onSuccess(response.data))
        }
    } catch (error) {
        console.log('error', error)
    }
}

const action = (todo) => ({
    type: 'todos/addTodo',
    payload: todo, // 'Buy some milk'
})

export const extendedAction = () => ({
    type: 'pokemons/fetchPokemon',
    meta: {
        api: true, // flag so we can catch this inside api middleware.
    },
    payload: {
        method: 'GET',
        baseUrl: 'https://pokeapi.co/api/v2/',
        path: 'pokemon?limit=10',
        onSuccess: ({ results }) => setPokemons(results),
    },
})

const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk',
}

console.log(addTodoAction)

const setPokemons = {
    type: 'pokemon/setPokemons',
    payload: [],
}

export default apiMiddleware
