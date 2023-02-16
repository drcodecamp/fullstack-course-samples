import fs from 'fs'

const data = fs.readFileSync('d.txt', 'utf-8')
const sentence = data.toString()
console.log('1:', sentence)
const p = sentence.replaceAll('monkey', 'dog')
console.log('2:', p)

