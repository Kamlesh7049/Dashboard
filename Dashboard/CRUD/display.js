async function dataShow() {
  let mytable = `
    <table border="2px solid black" width="205%" align="center">
    <tr bgcolor="blue">
    <th>ID</th>
    <th>Employee No</th>
    <th>Employee Name</th>
    <th>Salary</th>
    <th>City</th>
    </tr>
    
    `;
//   let url = "http://localhost:3000/employees";
  let myobj = await fetch("http://localhost:3000/employees");
  console.log(myobj);

  let mydata = await myobj.json();
  console.log(mydata);
  mydata.map((key) => {
    mytable += `
      <tr>
      <td>${key.id}</td>
      <td>${key.employeeno}</td>
      <td>${key.name}</td>
      <td>${key.salary}</td>
      <td>${key.city}</td>
      </tr>   

`;
  });

  mytable += `</table>`;
  document.getElementById("demo").innerHTML = mytable;
}

dataShow();


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