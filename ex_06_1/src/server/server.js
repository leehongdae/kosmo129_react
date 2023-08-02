const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const bodyParser = require('bodyparser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())

app.post('/create', (req, res) => {
  console.log('>>> create  ::: ')
  const empno = req.body.empno
  const ename = req.body.ename
  const job = req.body.job
  console.log('>>> create  ::: ' + empno)
  console.log('>>> ename  ::: ' + ename)
  console.log('>>> job  ::: ' + job)
})

app.get('/select', (req, res) => {
  console.log('>>> select In')
  res.json({ empno: '0001', ename: '0001', job: '0001' })
})

app.post('/update', (req, res) => {
  console.log('>>> update In')
  const empno = req.body.empno
  const job = req.body.job
  console.log('>>> empno : ' + empno)
  console.log('>>> job : ' + job)
})

app.listen(port, () => {
  console.log(`Example app listening at http:localhost: ${port}`)
})
