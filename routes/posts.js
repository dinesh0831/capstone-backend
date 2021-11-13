
const router=require("express").Router();
const hostService=require("../service/host.service")
const multer=require("multer")

router.post("/save",hostService.hostProduct);
router.get("/save",hostService.getProduct)
router.patch("/update/:id",hostService.updateProduct)
router.delete("/:id",hostService.deletePosts)
// router.get("/Booking/:id",hostService.BookingUpdate)

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
