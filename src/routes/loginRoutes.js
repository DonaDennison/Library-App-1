const express= require('express');
const loginRouter = express.Router();
loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Login'
    });
});
 module.exports = loginRouter; 