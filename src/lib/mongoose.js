import mongoose from 'mongoose'
import config from '../config/db'
const log = require('./log')(module)

mongoose.connect(config.url)
const db = mongoose.connection

db.on('error', err => {
  log.error('connection error:', err.message)
})
db.once('open', () => {
  log.info('Connected to DB!')
})


module.exports = mongoose
