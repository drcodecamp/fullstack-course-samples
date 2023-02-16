import { loginUser } from '../services/login.service.js'

export const onLoginHandler = (req, res) => {
    const { username, password } = req.body
    console.log('user send login', username, password)
    try {
        const access = loginUser(username, password)
        res.status(200).json(access)
    } catch (err) {
        res.status(400).json(err.message)
    }
}
