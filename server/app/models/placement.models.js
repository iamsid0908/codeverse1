const mongoose=require("mongoose")


const PlacementScema=new mongoose.Schema({
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


const PlacementModel=mongoose.model("place",PlacementScema);
module.exports=PlacementModel;
