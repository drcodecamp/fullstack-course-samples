const onDemoPageLoad = () => {
    initCounter()
}

const onIncrement = () => {
    incrementCounter()
}

const onDecrement = () => {
    decrementCounter()
}

const onNextLevel = () => {
    changeLevel()
}

const onDotAdd = (_, event) => {
    console.log(event)
    var xPos = event.clientX - _.offsetLeft - _.offsetWidth / 2
    var yPos = event.clientY - _.offsetTop - _.offsetHeight / 2
    console.log(event)
    console.log(xPos, yPos)
    addDot(xPos, yPos)
}
