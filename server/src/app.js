const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
//const { static } = require('express');
//app.use(express.static('./uploads'))
//  app.use('../uploads', express.static('uploads'))
// app.use('/uploads', express.static(path.join(__dirname + 'uploads')))
// app.use(express.static('public'))
//app.use('./uploads/', express.static(path.join(__dirname, 'uploads')))
// app.use("/uploads", express.static(__dirname + 'uploads'));
app.use('/uploads', express.static('uploads'));
require('./routes')(app)

sequelize.sync()
.then(() =>{
app.listen(config.port)
console.log(`Server started on port ${config.port}`)
})

