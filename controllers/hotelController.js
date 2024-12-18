var express = require('express')
var router = express.Router()
const {list,create,updateHotel,deleteHotel,recherche} = require('../services/hotelService')

router.get('/hotelByroom', recherche)
router.get('/list', list)
router.post('/create', create )
router.delete('/delete/:id',deleteHotel)
router.put('/update/:id',updateHotel)

module.exports = router