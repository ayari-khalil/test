const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  fabricationDate:Date,
  nbrRooms: {type:Number,default:10}
});

module.exports = mongoose.model('Hotel', hotelSchema);