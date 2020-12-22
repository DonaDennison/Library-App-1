let FirstName2 = document.getElementById("FirstName");
let LastName2 = document.getElementById("LastName");
let Author2 = document.getElementById("Author");

let FirstName3 = document.getElementById("FirstName1");
let LastName3 = document.getElementById("LastName1");
let Author3 = document.getElementById("Author1");
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
    if(Author2.value.trim() == "" ){
        store3= false;
        Author3.innerHTML= "Author name can not be empty";
        Author3.style.color= "red";
    }
    
    else if(kkk1.test(Author2.value.trim())){
        store3 = true;
        Author3.innerHTML= "Looks Good";
        Author3.style.color= "green";


    }
    else{
        Author3.innerHTML= "Names must be composed of letters";
        Author3.style.color= "red";
        store3= false
    }
    if(store1==true && store2==true && store3==true){
        return true;
    }
    else{
        return false;
    }
}
