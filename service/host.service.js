const Host = require("../model/host.schema")

exports.hostProduct=async (req,res,next)=>{
    console.log(req.user)
    const host=new Host({
            user:req.body.user,
            status:req.body.status,
    })
    var response=await host.save();
    res.send(response)
}

exports.updateProduct = async (req, res, next) => {
            console.log(req.user)
       const id=req.params.id;
        console.log(req.params.id)
       var response=await Host.findByIdAndUpdate( id,  {
            houseType:req.body.houseType,
            kindOfType:req.body.kindOfType,
            kindOfShare:req.body.kindOfShare,
            guest: req.body.guest,
            beds: req.body.beds,
            bedrooms: req.body.bedrooms,
            bathrooms: req.body.bathrooms,
            price:req.body.price,
            amenities:req.body.amenities,
            title:req.body.title,
            highlights:req.body.highlights,
            description:req.body.description,
            security:req.body.security,
            house_no: req.body.house_no,
            street: req.body.street,
            town: req.body.town,
            city: req.body.city,
            state: req.body.stt,
            pin:req.body.pin,
                photos:req.body.photos,
                status:req.body.status,
                booked:req.body.booked
       },{new:true})
       res.send({message:"successfully updated"})
   
}
exports.getProduct=async(req,res,next)=>{
   
    try{
    const data= await Host.find({user:req.user.user._id})
    console.log(data)
    res.send(data)
    }
    catch(err)
    {
        res.send(err)
    }
}
exports.deletePosts=async(req,res,next)=>{
    const id=req.params.id
    try{
        await Host.findByIdAndRemove(id)
        if(!Host){
        return res.status(401).send({error:"User can't delete this"});
        }
    }
    catch(error)
    {
        console.log("erroe deleting data",error)
        res.sendStatus(500)
    }
   
    
}
