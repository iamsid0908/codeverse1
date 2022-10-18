const academicController=require("../Controller/academics.controller")

module.exports=app=>{
    app.get("/api/academic",academicController.findAll);
    app.post("/api/academic",academicController.create);
}