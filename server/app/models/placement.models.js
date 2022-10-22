const mongoose=require("mongoose")


const PlacementScema=new mongoose.Schema({
    topic:{
        require:true,
        type:String
    },
    description:{
        require:true,
        type:String
    },
    img:{
        require:true,
        type:String
    },
    owner:{
        require:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})


const PlacementModel=mongoose.model("place",PlacementScema);
module.exports=PlacementModel;
