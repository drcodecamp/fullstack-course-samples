import express from 'express'

const app = express()
const port = 9090

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))

app.get('/', (req, res) => {
    res.status(200).send('OK')
})

app.get('/cookie', (req, res) => {
    res.cookie('fruit', 'apple')
    res.cookie('userPassword', 'myAwsomepassword1990!_???!)')
    res.cookie('vegetable', 'tomato', { maxAge: 60 * 2 * 1000 })
    res.status(200).send('you got a cookie!')
})

app.get('/secure/cookie', (req, res) => {
    res.cookie('secure', 'session-id-8943u39fjf89', { sameSite: true, secure: true, maxAge: 60 * 1000, httpOnly: true })
    res.status(200).send('you got a cookie!')
})

app.listen(port, () => {
    console.log(`application start listening on port:${port}!`)
})
