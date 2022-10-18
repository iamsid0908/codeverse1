const express=require('express')
const mongoose=require('mongoose')
const app=express();
const cors=require("cors")
const bodyparser=require("body-parser")


mongoose.connect('mongodb+srv://siddharth:code@cluster0.ztvrct1.mongodb.net/?retryWrites=true&w=majority')

var db=mongoose.connection;
db.on('open',()=>{
    console.log("connected")
})
db.on('error',()=>{
    console.log("dis-connected")
})

app.use(cors({ origin: true }));


app.use(bodyparser.json());

require("./app/Routes/user.routes")(app)
require("./app/Routes/placement.routes")(app)
require("./app/Routes/academics.routes")(app)



const PORT=3001;
app.listen(PORT,()=>{
    console.log("server is running "+PORT);
})
