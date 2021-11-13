const express = require('express')
const app = express()
const port = 8000
const calculate = require('./src/calculate')
const cors = require('cors')

// Allow all cors
app.use(cors())
app.options('*', cors())
// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/', async (req, res) => {
  console.log(req.body)
  const result = await calculate(req.body)
  res.json(result)
})

app.listen(port, () => console.log(`Running on ${port}`))
