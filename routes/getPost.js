const router=require("express").Router();
const postService=require("../service/post.service")
router.get("/get",postService.getposts)
router.get("/getone/:id",postService.getOne)  
module.exports=router;