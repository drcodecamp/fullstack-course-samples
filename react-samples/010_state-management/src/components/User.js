import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGame, removeGame } from '../store/userSlice'

const User = () => {
    /** Hooks on Top! */
    const user = useSelector((state) => state.user)
    const [gameName, setGameName] = useState('')
    const dispatch = useDispatch()

    /** Handlers */
    const handleInputChange = (e) => {
        setGameName(e.target.value)
    }
    const handleAddNewGame = () => {
        if (!gameName) return
        dispatch(addGame(gameName))
    }
    const handleRemoveGame = (idx) => {
        dispatch(removeGame(idx))
    }

    /** Render */
    return (
        <div>
            <h1>user component</h1>
            <input
                placeholder="enter game name"
                value={gameName}
                onChange={handleInputChange}
            />
            <button onClick={handleAddNewGame}>Add new Game!</button>
            <div>
                <h1>user games</h1>
                {user.games.map((game, i) => (
                    <h2 onClick={() => handleRemoveGame(i)} key={i}>
                        {game}
                    </h2>
                ))}
            </div>
        </div>
    )
}

export default User
