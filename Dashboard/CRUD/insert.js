
document.getElementById("btn1").addEventListener('click',insert);

async function insert() {
    try{
        let myemployee=document.getElementById("eno").value;
        let myname=document.getElementById("nm").value;
        let mycity=document.getElementById("city").value;
        let mysalary=document.getElementById("salary").value;

        
        let url="http://localhost:3000/employees";
        let response=await fetch(url,{ 
            method:"POST",  
            //OBJECT TO STRING
            body:JSON.stringify({
                 employeeno:myemployee,
                 name:myname,
                 city:mycity,
                 salary:mysalary
            }) ,
            headers:{
                "Content-type":"application/json;charset=UTF-8"
            }   
        
             });
             console.log(response);
             let data=await response.json();
             console.log(data);
             alert("Data Successfully added");

    }
    catch(error){   //Add 'error' to the catch block
        console.log("Error",error);
        alert("Error while adding");
    }
    
    
}

   //Logout................//

   function logout(){
    let out=window.confirm("do you want to logout");
    if(out){
        window.localStorage.clear("information")
        window.open("../Login/index.html") 
    }
    else{

    }
}