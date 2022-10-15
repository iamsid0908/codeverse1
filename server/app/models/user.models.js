const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    hasedPassword:{
        type:String
    },
    place:[
        {type: mongoose.Schema.Types.ObjectId, ref:'place'}
    ]
    
})

module.exports=mongoose.model("User",UserSchema);