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
    ],
    academic:[
        {type: mongoose.Schema.Types.ObjectId, ref:'academic'}
    ]
    
})

module.exports=mongoose.model("User",UserSchema);