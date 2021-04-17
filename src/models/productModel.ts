import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    requires: true,
    unique: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
})

export default model('cronometroModel', schema)
