const userModels = require("../models/user.models")

exports.create= (req,res)=>{
    const data=req.body;
    const User=new userModels(data);

    User.save()
    .then(data=>{
        if(!data){
            res.status(404).send({message:"something went wrong"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}

exports.getAll=(req,res)=>{
    userModels.find({})
    .then(data=>{
        if(!data){
            res.status(404).send({message:"something went wrong"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}
exports.postsById= async (req,res)=>{
    const id=req.params.id;
    const user=await userModels.findById(id).populate('place');
    res.send(user.place)
}