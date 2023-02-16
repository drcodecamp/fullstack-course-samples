const renderCounter = (counterValue) => {
    const counterElement = document.querySelector('.root')
    counterElement.innerHTML = counterValue
}

const renderDots = (dotsData) => {
    const counterElement = document.querySelector('.dot-container')
    let dotsElement = ``
    dotsData.forEach((dot) => {
        const dotStyle = `transform:translate(${dot.x}px,${dot.y}px)`
        dotsElement += `
            <div class="dot" style="${dotStyle}"></div>
        `
    })
    counterElement.innerHTML = dotsElement
}
