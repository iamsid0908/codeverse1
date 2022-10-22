const AuthController=require("../Controller/auth.controller")

module.exports=app=>{
    app.post("/api/register",AuthController.register);

    app.post("/api/login",AuthController.login);
}