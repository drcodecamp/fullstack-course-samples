import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [age, setAge] = useState(25)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (age >= 30) {
      return setError(true)
    }
    setError(false)
  }, [age])

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }

  return (
    <div className="App">
      <h1>Hello Student, How old are you?!</h1>
      <input onChange={handleAgeChange} type="number" value={age} />
      {error && <div className="danger">* age field cannot be greater than 90!</div>}
    </div>
  )
}

export default App
