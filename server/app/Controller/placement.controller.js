const PlacementModel =require("../models/placement.models")

exports.findAll=(req,res)=>{
    PlacementModel.find({})
    .then(data=>{
        
        res.send(data);
    })
    .catch(error=>{
        res.status(500).send({message:error.message})
    })
}

exports.create=(req,res)=>{
    const palcement=new PlacementModel({
        topic:req.body.topic,
        description:req.body.description,
        img:req.body.img
    })
    palcement.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}
