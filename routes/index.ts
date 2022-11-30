
import mongoose from "mongoose"
const Cover_Db = mongoose.model("COVER_IMAGE_SCHEMA")

class Routes {

    getCoverImageRoutes(app:any){
        app.post("/postCoverImage",(req:any,res:any)=>{
            const cover_db = new Cover_Db(req.body.where);
            cover_db.save((err:any,docs:any)=>{
                if (!err){
                    res.status(200).json({"status":true});
                }else{
                    res.status(400).json({"status":false});
                }
            })
        })
        app.post("/getCoverImage",(req:any,res:any)=>{
            Cover_Db.find((err:any,docs:any)=>{
                if (!err){
                    res.status(200).json(docs)
                }else{
                    res.status(400).json({"status":false});
                }
            })
        })
    }
}

module.exports = new Routes();