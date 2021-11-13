const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const Userlist=require("../model/user.schema");
const {registerSchema,logginSchema}=require("../model/validation");

const UserService={
    async register(req,res){
        try{
            // validation
            let {error}=await registerSchema.validate(req.body);
            if(error){
            return res.send({message:"*validation failed",error})
            }
            // check the email existing or not
            const user=await Userlist.findOne({email:req.body.email}).exec()
            if (user){
            return res.send({message:"*User already exist"});
            }
            // password bcrypt
            const salt=await bcrypt.genSalt();
            req.body.password=await bcrypt.hash(req.body.password,salt)
            // insert register data
            const users= new Userlist({
                email:req.body.email,
                password:req.body.password,
                name:req.body.name,
                mobileno:req.body.mobileno,
               
            });
            
            var response=await users.save();
             res.send({response,message:"*successfully registered"})
        }
        catch(error)
        {
            res.sendStatus(500)
        }
    },
    async login(req,res){
        try{
            // validation
            const {error}=await logginSchema.validate(req.body);
            if(error) 
            return res.send({message:"*validation failed"})
          
            
            // email is registered or not
            const user=await Userlist.findOne({email:req.body.email}).exec()
            console.log(user)
            if (!user)   return res.send({message:"*User not exist"})
           
          
            
            // check the password
           const isValid=await bcrypt.compare(req.body.password,user.password)
          if(!isValid)  return res.send({message:"*email and password not matching",});
         
          
           
            // token for access the account
           const token=await jwt.sign({user}, process.env.jwt_key)
           console.log(token)
           

            // respose for logged in
           res.send({message:"*successfully loggedIn",token})
        
        }
        catch(error){
            console.log("Error",error)
            res.sendStatus(500)
        }
    },
    async profile(req,res){
        const id=req.params.id
        try{
            const data= await Userlist.findById(id)
            res.send(data)
            }
            catch(err)
            {
                res.send(err)
            }
    },
    async Update(req,res){
        const id=req.params.id
        try{
            const data= await Userlist.findByIdAndUpdate( id,  {
                wishList:req.body.wishList,
                bookedList:req.body.bookedList
            })
            res.send(data)
        }
        catch(err){
            res.send(err)
        }
    }
}
module.exports=UserService
