const PlacementModel =require("../models/placement.models")
const userModels =require("../models/user.models")

exports.findAll=(req,res)=>{
    PlacementModel.find({})
    .then(data=>{
        
        res.send(data);
    })
    .catch(error=>{
        res.status(500).send({message:error.message})
    })
}

exports.create= async (req,res)=>{
    const userId=req.params.id;

    const userById = await userModels.findById(userId);
    console.log(userId);

    if(!userById){
       return res.status(404).send({message:"Invalid owner id"});
    }
    const palcement=new PlacementModel({
        topic:req.body.topic,
        description:req.body.description,
        img:req.body.img,
        owner:userId
    })
    const data = await palcement.save();
    userById.place.push(palcement);
    await userById.save();

    return res.send(userById);

    // .then(data=>{
    //     res.send(data);
    // })
    // .catch(err=>{
    //     res.status(500).send({
    //         message:err.message
    //     })
    // })

}
exports.createpost=(req,res)=>{

}
