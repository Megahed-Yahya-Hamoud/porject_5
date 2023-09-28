let navBar=document.querySelectorAll("ul li a")
navBar.forEach(function(ele) {
    ele.onclick=function(){
        navBar.forEach(function (ele){
            ele.classList.remove("active")
        });
        ele.classList.add("active")
    };
});

// ========================================

let firstName=document.querySelector(".first")
let lastName=document.querySelector(".last")
let password=document.querySelector(".pass")
let gmail=document.querySelector(".email")
let form=document.querySelector(".form")

window.onload=function () {
    firstName.focus();
}
form.onsubmit=function(e){
    let first=false;
    let last=false;
    let pass=false;
    let email=false;

    if(firstName.value !== ""){
        first=true
    }
    if(lastName.value !==""){
        last=true
    }
    if(password.value !== "" && password.value.length >=8 ){
        pass=true
    }
    if(gmail.value !=="" ){
        email=true
    }
    

    if( first === false || last === false || pass === false || email === false ){
        e.preventDefault();
    }

}

// ================================================


async function fetchData(){
    try{
    fetch("https://fakestoreapi.com/products").then((result)=>{
        return result.json()
    }).then((data)=>{      
    for (let index = 0; index < 9; index++) {
    const mySet=`
    <div class="col">
    <div class="data p-3">
    <div class="text-center">
    <img src="${data[index].image} " class="" height="150px" width="150px">
    </div>
    <p class="mt-3"><b>id</b> :<span class="text-danger"> ${data[index].id}</span> </p>
    <p><b>title</b> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit, imilique 
    </p>
    <p><b>price</b> : <span class="text-danger"> ${data[index].price}</span> </p>
    <p><b>description </b>: 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit, imilique 
    </p>
    <p><b>category </b> : ${data[index].category} </p>
    </div>
    <div>
    <br> 
    `
    document.querySelector(".fetch-data").insertAdjacentHTML("beforeend", mySet)
    }
})
    }catch (Error){

    }
}
fetchData()


// ================================================
let btn=document.querySelector("#bt")
window.onscroll=function(){
    if(window.scrollY >= 400){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }
}

btn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
