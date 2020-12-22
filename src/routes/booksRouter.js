const express= require('express');
const booksRouter = express.Router();
var books = [
    {
        titile: 'ANNA KARENINA',
        author: 'Leo Tolstoy',
        genre: 'Novel',
        img:"img3.jpg",
        discription: 'Anna Karenina is a novel by the Russian author Leo Tolstoy, first published in book form in 1878. Many writers consider Anna Karenina the greatest work of literature ever,[2] and Tolstoy himself called it his first true novel. It was initially released in serial installments from 1873 to 1877 in the periodical The Russian Messenger'
    },
    {
        titile: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Novel',
        img:"img4.jpg",
        discription:'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize. The plot and characters are loosely based on Lees observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten'
    },
    {
        titile: 'Beloved',
        author: 'Toni Morrison',
        genre: 'Novel ',
        img:"img5.jpg",
        discription:' Beloved is a 1987 novel by the American writer Toni Morrison. Set after the American Civil War, it tells the story of a family of former slaves whose Cincinnati home is haunted by a malevolent spirit'
    },
    {
        titile: 'The God of Small Things',
        author: 'Arundhati Roy',
        genre: 'Novel',
        img:"img6.jpg",
        discription:'It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the "Love Laws" that lay down "who should be loved, and how. And how much." The book explores how the small things affect peoples behavior and their lives. The book also reflects its irony against casteism, which is a major discrimination that prevails in India.'
    }
]
booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav:[{link:'/books/createbook',name:'Add New Book'},{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Books',
        books
    });
});
booksRouter.get('/createbook',function(req,res){
    res.render("createNewBook",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Books'
    });
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render("book",
    {
        nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},],
        titile:'Library-Book',
        book:books[id]
    });
});
 module.exports = booksRouter; 