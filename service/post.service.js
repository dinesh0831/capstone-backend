const Host = require("../model/host.schema")
exports.getposts=async(req,res,next)=>{
    try{
    const data= await Host.find()
    res.send(data)
    }
    catch(err)
    {
        res.send(err)
    }
}
exports.getOne=async(req,res,next)=>{
    const id=req.params.id
    try{
    const data= await Host.findById(id)
    res.send(data)
    }
    catch(err)
    {
        res.send(err)
    }
}