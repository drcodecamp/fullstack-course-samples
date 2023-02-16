import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

const getDogs = () => {
  return [
    {
      name: 'Dada',
      type: 'POODLE',
    },
    {
      name: 'Dada',
      type: 'POODLE',
    },
    {
      name: 'Dada',
      type: 'POODLE',
    },
    {
      name: 'Dada',
      type: 'POODLE',
    },
    {
      name: 'Dada',
      type: 'POODLE',
    },
    {
      name: 'Dada',
      type: 'POODLE',
    },
    {
      name: 'Dada',
      type: 'POODLE',
    },
  ]
}

app.get('/', (req, res) => {
  res.status(200).send('OK')
})

app.get('/dogs', (req, res) => {
  res.status(200).json(getDogs())
})

app.post('/cats', (req, res) => {
  const { cats } = req.body
  if (!cats) {
    return res.sendStatus(400)
  }
  cats.forEach((cat) => {
    console.log(cat.name)
  })
  res.status(200).send('cats')
})

app.listen(3000, () => {
  console.log('application start listening !')
})
