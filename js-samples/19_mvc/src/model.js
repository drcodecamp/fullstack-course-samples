let counter = null
let dots = []

const initCounter = () => {
    const persistCounter = getLocalValue('counter')
    if (persistCounter) {
        counter = persistCounter
    } else {
        counter = 0
        setLocalValue('counter', counter)
    }
    renderCounter(counter)
}

const incrementCounter = () => {
    counter++
    setLocalValue('counter', counter)
    renderCounter(counter)
}

const decrementCounter = () => {
    setLocalValue('counter', counter)
    counter -= 1
    renderCounter(counter)
}

const changeLevel = () => {
    if (counter > 1000) {
        alert('You have won!')
    }
}

const getLocalValue = (key) => {
    const value = localStorage.getItem(key)
    return value || null
}

const setLocalValue = (key, value) => {
    localStorage.setItem(key, value)
}

const addDot = (xPos, yPos) => {
    dots.push({
        x: xPos,
        y: yPos,
    })
    console.log('dots', dots)
    renderDots(dots)
}
