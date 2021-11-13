const mongoose=require("mongoose")
require("dotenv").config()
const Url=process.env.mongoose
exports.connect=async()=>{
    
    try{
   await mongoose.connect(Url ,{useNewUrlParser:true,useUnifiedTopology:true})
   
    console.log("success mongoose")
    }
    catch(err)
    {
        console.log(err)
    }
}
