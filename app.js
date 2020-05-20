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

  const inputMemberData = req.body
  const userMemberData = toCheckmembership(inputMemberData)
  const error = "Username/Password錯誤"

  if (userMemberData) {
    res.render('welcome', { userMemberData: userMemberData })
  } else {
    res.render('index', { inputMemberData: inputMemberData, error: error })
  }

})

// starts the express server and listening for connections.

app.listen(port, () => {
  console.log(`Express app listening on localhost: ${port}.`)
})