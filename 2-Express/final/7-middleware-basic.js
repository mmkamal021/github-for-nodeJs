const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

app.use([logger, authorize])

// app.get('/', logger, (req, res) => {
app.get('/', (req, res) => {
  res.send('Home')
})

// app.get('/about', logger, (req, res) => {
app.get('/about', (req, res) => {
  res.send('About')
})

// app.get('/api/products', logger, (req, res) => {
app.get('/api/products', (req, res) => {
  res.send('Products')
})

// app.get('/api/items', logger, (req, res) => {
app.get('/api/items', (req, res) => {
  console.log(req.users)
  res.send('items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
