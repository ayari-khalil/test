var express = require('express')
var router = express.Router()
const {list,create,updateHotel,deleteHotel,getHotelsByRoomRange} = require('../services/hotelService')

router.get('/hotelByroom', getHotelsByRoomRange)
router.get('/list', list)
router.post('/create', create )
router.delete('/delete/:id',deleteHotel)
router.put('/update/:id',updateHotel)

module.exports = router