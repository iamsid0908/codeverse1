const placementController =require("../Controller/placement.controller")

module.exports=app=>{
    
    app.get("/api/placement",placementController.findAll)
    app.post("/api/placement/:id",placementController.create)
    // 

}