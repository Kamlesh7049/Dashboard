async function login(){
    let data=await fetch('http://localhost:4000/registration');
    let response = await data.json();
    let username=document.querySelector('#username').value;
    let password=document.querySelector('#password').value;

    let filterdata=response.filter(items=>items.username===username && items.password===password)
     
    window.localStorage.setItem('information',JSON.stringify(filterdata))
    console.log(filterdata)

    if(filterdata.length>=1){
        window.alert("successfully login");
        window.open("dashborad.html");
    }
    else{
        window.alert("register first");
        window.open("apidata.html");
    }




   }