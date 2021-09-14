const express = require('express')
const app = express()
const port = 3000

const cities = ["Fairfax", "Viena", "Falls Church", "Arlington"];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cities', (req, res) => {
  return res.json(cities)
})

module.exports = app;