const userController=require("../Controller/user.controller")

module.exports=app=>{
    app.post('/api/user',userController.create);
    app.get('/api/user',userController.getAll);
    app.get('/api/user/posts/:id',userController.postsById); 
}