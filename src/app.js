const options = require('./start/options')
const bootstrap = require('./start/run')

const express = require('express')
const app = express()
options(app, express)
bootstrap(app)

