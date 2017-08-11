const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'pug')

app.get('/form-get', (request, response) => {
  response.render('index', { method: 'GET' })
})

app.listen(3000, () => {
  console.log('App is now listening on 3000')
})
