const products = [
    {
        name: 'paka paka',
        color: 'red',
    },
    {
        name: 'paka pakav2',
        color: 'white',
    },
    {
        name: 'whity pakav2',
        color: 'white',
    },
    {
        name: 'paka pakav3',
        color: 'red',
    },
    {
        name: 'paka pakav4',
        color: 'red',
    },
]

export const getProducts = (filterByColor = 'red') => {
    if (filterByColor) {
        return products.filter(product => product.color === filterByColor)
    }
    return products
}
