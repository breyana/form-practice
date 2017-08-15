const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.get('/form-get', (request, response) => {
  response.render('form', { method: 'GET' })
})

app.get('/form-post', (request, response) => {
  response.render('form', { method: 'POST' })
})

app.all('/submit-form', (request, response) => {
  response.json({ "body-params": request.body, "query-params": request.query})
})

app.listen(3000, () => {
  console.log('App is now listening on 3000')
})
