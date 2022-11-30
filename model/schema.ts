
import mongoose from "mongoose";

const coverImageSchema = new mongoose.Schema({
    coverImage:{type:String}
})

mongoose.model("COVER_IMAGE_SCHEMA",coverImageSchema);