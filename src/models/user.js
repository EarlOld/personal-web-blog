import mongoose from '../lib/mongoose'

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
  name: { type: String, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model('Article', schema)
