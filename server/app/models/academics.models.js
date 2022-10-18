const mongoose=require("mongoose")

const AcademicsScema=new mongoose.Schema({
    topic:{
        type:String
    },
    description:{
        type:String
    },
    img:{
        type:String
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const AcademicModel=mongoose.model("academic",AcademicsScema);
module.exports=AcademicModel;