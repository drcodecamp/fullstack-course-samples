function* generateMath(x) {
    console.log('enter the function')
    yield x + 1
    console.log('you again?')
    yield x * 2
    console.log('nothing here...return undefined.')
}

const gen = generateMath(10)

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

/*const interval = setInterval(() => {
    const genValue = gen.next().value
    if (!genValue) {
        clearInterval(interval)
    } else {
        document.querySelector('#root').innerHTML = genValue
    }
}, 1000)*/

function* yieldAndReturn() {
    yield 'Y'
    return 'R'
    yield 'unreachable'
}

let gen2 = yieldAndReturn()

/*console.log(gen2.next()) // { value: "Y", done: false }
console.log(gen2.next()) // { value: "R", done: true }
console.log(gen2.next()) // { value: undefined, done: true }*/
