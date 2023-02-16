import './App.css'
import { useEffect, useMemo, useState } from 'react'
import PokemonItem from './components/PokemonItem'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [count, setCount] = useState(5)
  const [otherState, setOtherState] = useState(0)

  // if you see render twice check out strict mode
  useEffect(() => {
    ;(async () => {
      await fetchPokemons()
    })()
  }, [count])

  const fetchPokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
    const data = await response.json()
    console.log('data', data)
    const { results } = data
    setPokemons(results)
  }

  const handlePokemonLimitChange = ({ target }) => {
    const val = target.value
    setCount(val)
  }

  // this function will get render each time APP.js will re-render
  // App.js can re-render 100 times if we want to display 100 pokemons!
  // it can also calculate when we change un related state!!

  const sum = () => heavySumCalculation(pokemons.length)

  // fix to the problem is to save the value of the function into a hook
  // each time component loads it checking if it needs to be running
  // if count has changed (as it part of the calculation)

  const memoSum = useMemo(() => {
    console.log('2nd function which is memoized;')
    return heavySumCalculationForMemo(pokemons.length)
  }, [pokemons.length])

  return (
    <>
      <h1 className="app-title">POKEDEX</h1>
      <div className="app-options">
        <h2>How many Pokemon's do you like to display? (1-898)</h2>
        <button onClick={() => setOtherState(otherState + 1)}>Set Other State</button>
        <div>other state {otherState}</div>
        <div>Sum: {sum()}</div>
        <div>Memo sum: {memoSum}</div>
        <label>
          <input
            className="exercise-input"
            type="number"
            placeholder="Pokemons"
            value={count}
            onChange={handlePokemonLimitChange}
          />
        </label>
      </div>
      <div className="cards-container">
        {pokemons &&
          pokemons.map((pokemon, idx) => <PokemonItem key={pokemon.name} pokemonIdx={idx} />)}
      </div>
    </>
  )
}

function heavySumCalculation(n) {
  console.log('1st function which not memoized !!!')
  return n <= 0 ? 1 : n * heavySumCalculation(n - 1)
}

function heavySumCalculationForMemo(n) {
  return n <= 0 ? 1 : n * heavySumCalculationForMemo(n - 1)
}

export default App
