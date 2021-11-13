const route=require("express").Router();




 
const service=require("../service/user.service")

route.post("/register",service.register )
route.post("/login",service.login )
route.get("/profile/:id",service.profile)
route.patch("/wishlist/:id",service.Update)
module.exports=route