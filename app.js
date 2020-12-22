const express= require('express');
const app= new express;
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
const booksRouter = require('./src/routes/booksRouter');
const authorsRouter = require('./src/routes/authorsRouter');
const port = process.env.PORT || 5000;



app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);




app.get('/',function(req,res){
    res.render("index",
    {
        nav:[
        {link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},
        {link:'/login',name:'Login'},
        {link:'/signup',name:'Sign Up'}
        
    ],
        titile:'Library'
    });
});

app.listen(port,()=>{console.log("Server Ready at" + port)} );