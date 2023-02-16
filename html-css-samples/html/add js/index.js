let counter = 0

setInterval(() => {
    counter++
    document.querySelector('#counter').innerHTML = counter
}, 1000)
