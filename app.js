const express = require('express')
const app = express()
const port = 8000
const calculate = require('./src/calculate')

app.post('/', async (req, res) => {
  const result = await calculate(req)
  res.json(result)
})

app.listen(port, () => console.log(`Running on ${port}`))
