// faço requirimento para uso dos pacotes
const express = require('express')
const exphbs  = require('express-handlebars')


// inicio a aplicação invocando a função
const app = express()
const conn = require('./db/conn')


// configurações
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

// read body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.listen(3000) 