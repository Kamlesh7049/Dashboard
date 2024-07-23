function sub(){
    let id=document.querySelector('#id').value;
    let nam=document.querySelector("#name").value; 
    let img=document.querySelector("#img").value; 
    let username=document.querySelector("#uname").value; 
    let mobile=document.querySelector("#mobile").value; 
    let password=document.querySelector("#password").value; 
    let cpassword=document.querySelector("#cpassword").value; 

    let information = {
        "id":id,
        "name":nam,
        "img":img,
        "username":username,
         "mobile":mobile,
         "password":password,
         "cpassword":cpassword

}
let url='http://localhost:4000/registration';
let obj={
 method:"POST",
 headers:{
     'content-type':'apllication/json'

 },
 body:JSON.stringify(information)
}
fetch(url,obj)

}
