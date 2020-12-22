const express= require('express');
const signupRouter = express.Router();
signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'}],
        titile:'Library-Signup'
    });
});
 module.exports = signupRouter; 