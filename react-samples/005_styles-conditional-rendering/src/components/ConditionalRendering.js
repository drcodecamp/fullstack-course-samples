import React from 'react'
import styles from './conditional.module.css'

const ConditionalRendering = () => {
  const [counter, setCounter] = React.useState(0)
  const increment = () => setCounter(counter + 1)
  return (
    <div className={styles.box}>
      <button onClick={increment}>Increment</button>
      <div>Counter is: {counter} </div>
      <div className={counter >= 5 ? styles.success : styles.normal}>
        {counter >= 5 ? <div>You have made it !</div> : null}
        {counter >= 5 && <div>You have made it !</div>}
      </div>
    </div>
  )
}

export default ConditionalRendering
