require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const app = express()
const PORT = process.env.PORT || 3001

const { corsOptions } = require('./utils/cors_options')
const controllers = require('./controllers')
require('./utils/db')

// Enable if you're behind a reverse proxy (i.e., Heroku)
app.set('trust proxy', 1)

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many requests from this IP. Please try again after 15 minutes.'
})

// Initialize the express app
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

if (process.env.ALLOW_CORS === '1') {
  app.use(cors(corsOptions))
}

app.use('/api', limiter, controllers)

app.get('*', (req, res) => {
  return res.status(200).send('Welcome to the Todo API')
})

app.use((err, req, res, next) => {
  return res.status(500).send(err.message)
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
