import { renderUserBalance } from './render.js'

let userBalance = 1000

const initBankSystem = () => {
    console.log('init')
    const withdraw = +prompt('how much?')
    userBalance -= withdraw
    renderUserBalance(userBalance)
}

;(() => {
    initBankSystem()
})()
