const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    hashedPassword:{
        require:true,
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