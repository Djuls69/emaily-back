const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const authRoutes = require('./routes/authRoutes')
require('./services/passport')
require('./models/User')

const app = express()
authRoutes(app)

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const PORT = process.env.PORT || 5000
app.listen(PORT)
