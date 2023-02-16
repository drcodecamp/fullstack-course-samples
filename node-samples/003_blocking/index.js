import * as crypto from 'crypto'

const blocking = () => {
    const salt = crypto.randomBytes(1024).toString('base64')
    const hash = crypto.pbkdf2Sync('myPassword', salt, 1000000, 512, 'sha512')
    console.log('ended', salt, hash)
}

setInterval(() => {
    let now = Date.now()
    blocking()
    console.log('Blocked for', (Date.now() - now) / 1000 + ' seconds')
}, 500)

setInterval(() => {
    console.log('small job')
}, 300)
