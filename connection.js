const mongoose=require("mongoose")

exports.connect=async()=>{
    
    try{
   await mongoose.connect("mongodb+srv://Dinesh:Dinesh31@cluster0.ed3jk.mongodb.net/capstone?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
   
    console.log("success mongoose")
    }
    catch(err)
    {
        console.log(err)
    }
}
