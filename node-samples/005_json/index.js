import data from './data/heroes.json' assert { type: 'json' }

const logHeroes = () => {
    data.heroes.forEach(hero => {
        console.log(hero.name)
    })
}

logHeroes()
