const moment = require('moment')

const timestamp = Date.now()
const formatted = moment(timestamp).format('DD MM YYYY')

console.log(formatted)
