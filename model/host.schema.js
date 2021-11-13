const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const hostList = new Schema({
    houseType: {
        type:String
       
    },
    kindOfType: {
       type:String
        
    },
    kindOfShare: {
       type:String
       
    },

  guest :{
      type:Number
  },
  beds:{
      type:Number
  },
  bedrooms:{
      type:Number
  },
  bathrooms:{
      type:Number
  },        
 

    price: {
        type:Number
        
    },
    amenities:{
        type:Array
    },
    title:{
        type:String
       
    },
    highlights:{
        type:Array

    },
    description:{
        type:String
        
    },
    security:{
        type:Array
    },
    
    house_no:{
        type:Number
    },
    street:{
        type:String
    },
    town:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    pin:{
        type:Number
    },
        photos:{
            type:Array
        },
        user:{
            type:String  
              },
              status:{
                  type:String
              },
              
            booked:{
                type:Array
            }
    
    
   
})
const Host = mongoose.model("Host", hostList, "host");
module.exports = Host
