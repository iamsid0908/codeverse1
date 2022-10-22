const userModels=require("../models/user.models")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")

exports.register=(req,res)=>{

    console.log(req.body);

    const user = new userModels({
        name:req.body.name,
        email:req.body.email,
        hashedPassword:bcrypt.hashSync(req.body.password,8)
    });

    user.save()
    .then(()=>{
       res.send({message:"User Registered Successfully"}); 
    })
    .catch((err)=>{
        res.status(500).send({message:err.message})
    })
}


exports.login=(req,res)=>{
    console.log(process.env.SECRET_KEY);
    const {email,password}=req.body;
    userModels.findOne({email:email})
    .then((user)=>{
        if(!user){
            return res.status(404).send({message:"user not found"})
            
        }
        var isPasswordValid=bcrypt.compareSync(password,user.hashedPassword);

        if(!isPasswordValid){
           return res.status(401).send({accessToken:null,message:"Invalid Password!"});
        }

        const payload={
            id:user._id
        }
        var token=jwt.sign(payload,process.env.SECRET_KEY,{
            expiresIn:86400
        });

        res.send({
            user:user,
            message:"login sucessfull",
            accessToken:token
        })
    })
    .catch(err=>{
        res.status(500).send({message:err.message})
    })
}
