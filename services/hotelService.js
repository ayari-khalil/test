const Hotel = require('../Models/hotel');


   async function list(req,res,next) {
    await Hotel.find()
    .then((data,err)=>{
        if(err){
            res.status(503).json(err)
        }else{
            res.status(200).json(data)
        }
    })  }


    async function create(req,res,next){
        const { name, fabricationDate,nbrRooms } = req.body 
   
        new Hotel({
            name: name,
            fabricationDate: fabricationDate,
            nbrRooms:nbrRooms
        }).save()
        .then((err,data)=>{
            if(err){
                console.log("error creating hotel!:"+err);
            }
            console.log(data);
        }) 
    }

   async function updateHotel(req,res,next) {
    await Hotel.findByIdAndUpdate(req.params.id,req.body,{new: true})
    .then((data,err)=>{
        if(err){res.status(503).json(err)}
        
            res.status(200).json(data)    
    })  }

   async function deleteHotel(id) {
    const hotelId = req.params.id;

    const result = await Hotel.findByIdAndDelete(hotelId);

        if (!result) {
            return res.status(404).json({ message: "Hotel not found" });
        }else{
        res.status(200).json({ message: "Hotel deleted successfully", Hotel: result });
    }  }

   async function getHotelsByRoomRange(minRooms, maxRooms) {
    return await Hotel.find({ nbrRooms: { $gte: 10, $lte: 100 } })
    .then((err,data)=>{
        if(err){
            console.log("error creating hotel!:"+err);
        }
        console.log(data);
    }) 
  }


module.exports = {list,create,updateHotel,deleteHotel,getHotelsByRoomRange};
