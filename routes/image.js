const multer=require("multer")
const router=require("express").Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"cover")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
});
const upload=multer({storage}).array("file")

router.post("/upload",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            return res.status(500).json(err)
        }
        return res.status(200).send(req.files)

    })
})
module.exports=router;