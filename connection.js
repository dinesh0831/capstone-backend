const mongoose=require("mongoose")

exports.connect=async()=>{
    
    try{
   await mongoose.connect(process.env.mongoose,{useNewUrlParser:true,useUnifiedTopology:true})
   
    console.log("success mongoose")
    }
    catch(err)
    {
        console.log(err)
    }
}
