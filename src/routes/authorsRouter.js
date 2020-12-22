const express= require('express');
const authorsRouter = express.Router();
var authors = [
    {
        titile: 'Anna Karenina , War And Peace, Mathilukal, A Confession',
        author: 'Leo Tolstoy',
        genre: 'Short Story writer, Novel writer, Poem writer',
        img:"img7.jpg",
        discription: 'Lev Nikolayevich Tolstoy commonly Leo Tolstoy in Anglophone countries) was a Russian writer who primarily wrote novels and short stories. Later in life, he also wrote plays and essays. His two most famous works, the novels War and Peace and Anna Karenina, are acknowledged as two of the greatest novels of all time and a pinnacle of realist fiction.'
    },
    {
        titile: 'To Kill a Mockingbird,Go Set A Watchman , Woolbur, Turkey Claus',
        author: 'Harper Lee',
        genre: 'Novel writer, Literature',
        img:"img8.jpg",
        discription:'Nelle Harper Lee was an American novelist best known for her 1960 novel To Kill a Mockingbird. It won the 1961 Pulitzer Prize and has become a classic of modern American literature'
    },
    {
        titile: 'Beloved, The Bluest Eye, Jazz',
        author: 'Toni Morrison',
        genre: 'American-African Literature, Poetry writing',
        img:"img10.jpg",
        discription:'Chloe Anthony Wofford Morrison, known as Toni Morrison, was an American novelist, essayist, book editor, and college professor. Her first novel, The Bluest Eye, was published in 1970.'

    },
    {
        titile: 'The God of Small Things, In Which Annie Gives It Those Ones',
        author: 'Suzanna Arundhati Roy ',
        genre: 'Writer, Essayist, Activist',
        img:"img6.jpg",
        discription:'Arundhati Roy was born in 1960 in Kerala, India. She studied architecture at the Delhi School of Architecture and worked as a production designer. She has written two screenplays, including Electric Moon (1992), commissioned by Channel 4 television. She lives in Delhi with her husband, the film-maker Pradip Krishen.'
        
    }
]
authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav:[{link:'/authors/createauthor',name:'Add New Author'},{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Authors',
        authors

    });
});
authorsRouter.get('/createauthor',function(req,res){
    res.render("createNewAuthor",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Add New Author'
    });
});
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render("author",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Book',
        author:authors[id]
    });
});
 module.exports = authorsRouter; 