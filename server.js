/*
Imports and configuration
*/
//=> Extern dependencies
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const ejs = require('ejs')

//=> Express  
const port = process.env.PORT || 8080
const server = express()
//

/*
Server initialisation
*/
//=> Use path to add views
server.engine('html', ejs.renderFile)
server.set('view engine', 'html')
server.set('views', __dirname + '/www')
server.use(express.static(path.join(__dirname, 'www')))


//=> Body Parser
server.use(bodyParser.json({limit: '10mb'}))
server.use(bodyParser.urlencoded({ extended: true }))

const init = () => {
    //=> Ready to listen
    server.listen(port, () => console.log('App is running on port ' + port))
}

//=> Launch server
init()
//