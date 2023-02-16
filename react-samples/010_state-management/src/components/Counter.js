import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'

const Counter = () => {
    /** Hooks on Top! */
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    /** Handlers */
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        if (counter <= 0) return
        dispatch(decrement())
    }
    return (
        <div>
            <h2>counter is : {counter}</h2>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
        </div>
    )
}

export default Counter
