let FirstName2 = document.getElementById("FirstName");
let LastName2 = document.getElementById("LastName");
let book12 = document.getElementById("book1");

let FirstName3 = document.getElementById("FirstName1");
let LastName3 = document.getElementById("LastName1");
let book13 = document.getElementById("book11");
let kkk1  = /^([A-Za-z\.]+)$/;
function validation(){
   
    let store1= false;
    let store2= false;
    let store3= false;
    // let store4= false;
    
   
    if(FirstName2.value.trim() == "" ){
        store1= false;
        FirstName3.innerHTML= "Name of the book can not be empty";
        FirstName3.style.color= "red";
    }
    
    else if(kkk1.test(FirstName2.value.trim())){
        store1 = true;
        FirstName3.innerHTML= "Looks Good";
        FirstName3.style.color= "green";

    }
    else{
        FirstName3.innerHTML= "Names must be of letters";
        FirstName3.style.color= "red";
        store1= false
    }
    if(LastName2.value.trim() == "" ){
        store2= false;
        LastName3.innerHTML= "Genre can not be empty";
        LastName3.style.color= "red";
    }
    
    else if(kkk1.test(LastName2.value.trim())){
        store2 = true;
        LastName3.innerHTML= "Looks Good";
        LastName3.style.color= "green";


    }
    else{
        LastName3.innerHTML= "Names must be composed of letters";
        LastName3.style.color= "red";
        store2= false
    }
    if(book12.value.trim() == "" ){
        store3= false;
        book13.innerHTML= "Author name can not be empty";
        book13.style.color= "red";
    }
    
    else if(kkk1.test(book12.value.trim())){
        store3 = true;
        book13.innerHTML= "Looks Good";
        book13.style.color= "green";


    }
    else{
        book13.innerHTML= "Names must be composed of letters";
        book13.style.color= "red";
        store3= false
    }
    if(store1==true && store2==true && store3==true){
        return true;
    }
    else{
        return false;
    }
}
