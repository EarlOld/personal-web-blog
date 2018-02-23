/* eslint func-names: ["error", "always"]*/
import mongoose from '../lib/mongoose'
import crypto from 'crypto'

const Schema = mongoose.Schema

// Schemas
// const Images = new Schema({
//   kind: {
//     type: String,
//     enum: ['thumbnail', 'detail'],
//     required: true
//   },
//   url: { type: String, required: true }
// })

const schema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

schema.methods.encrytPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
}
schema.virtual('password')
  .set(function (password) {
    this._plainPassword = password
    this.salt = Math.random() + ''
    this.hashedPassword = this.encrytPassword(password)
  })
  .get(function() { return this._plainPassword })

module.exports = mongoose.model('Article', schema)
