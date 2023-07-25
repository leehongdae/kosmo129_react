const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('>>> Express : ')
})

app.post('/test', (req, res) => {
  const text1 = req.body.inText
  console.log(text1)
})

app.listen(port, () => {
  console.log('Connect at http://localhost:${port}')
})
