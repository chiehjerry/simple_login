// include packages and define server ariables

const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const toCheckmembership = require('./member.js')
const app = express()
const port = 3000


//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setting routes

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {

  if (toCheckmembership(req.body)) {
    console.log('他是我們的會員啦！')
  } else {
    console.log('他不是我們的會員啦！')
  }
  res.render('index')

})

// starts the express server and listening for connections.

app.listen(port, () => {
  console.log(`Express app listening on localhost: ${port}.`)
})