const AcademicModel=require("../models/academics.models")

exports.findAll=(req,res)=>{
    AcademicModel.find({})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}
exports.create=(req,res)=>{
    const Academics=new AcademicModel({
        topic:req.body.topic,
        description:req.body.description,
        img:req.body.img
    })
    Academics.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message})
    })
}