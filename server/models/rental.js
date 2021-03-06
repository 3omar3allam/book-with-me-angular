const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema(
{
  title: {type: String, required: true, max: [128, 'Title is too long, max is 128 characters']},
  city: {type: String, required: true, lowercase: true},
  street: {type: String, required: true, min: [4, 'Too short, min is 4 characters']},
  category: {type: String, required: true, lowercase: true},
  image: {type: String, required: true},
  bedrooms: Number,
  description: {type: String, required: true},
  dailyRate: {type: Number, required: true},
  shared: Boolean,
  createdAt: {type: Date, default: Date.now},
},
{
  versionKey: false,
});

module.exports = mongoose.model('Rental', rentalSchema);
