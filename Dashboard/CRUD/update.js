function saveRow(id) {
  let myemp = document.getElementById(`eno-${id}`).value;
  let myname = document.getElementById(`nm-${id}`).value;
  let mycity = document.getElementById(`city-${id}`).value;
  let mysalary = document.getElementById(`salary-${id}`).value;

  let url = `http://localhost:3000/employees/${id}`;
  fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      employeeno: myemp,
      name: myname,
      city: mycity,
      salary: mysalary,
    }),
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
  })
    .then((response) => {
      console.log(response.ok);
      if (response.ok) {
        alert("Data updated Successfully!");
        dataShow();
      } else {
        throw new Error("Error while updating");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function editRow(id) {
  document.getElementById(`eno-${id}`).removeAttribute("readonly");
  document.getElementById(`nm-${id}`).removeAttribute("readonly");
  document.getElementById(`city-${id}`).removeAttribute("readonly");
  document.getElementById(`salary-${id}`).removeAttribute("readonly");

  document.getElementById(`edit-${id}`).style.display = "none";
  document.getElementById(`save-${id}`).style.display = "inline";
}

function myrecordRemove(id) {
  let url = `http://localhost:3000/employees/${id}`;
  fetch(url, {
    method: "DELETE",
  });
  alert("record deleted !");
}

async function dataShow() {
  let mytable = `
      <table>
      <tr>
      <th>Employee</th>
      <th>Name</th>
      <th>City</th>
      <th>Salary<th>
      <th>Actions</th>
      </tr>
  
      `;

  let url = "http://localhost:3000/employees";

  let myobj = await fetch(url);
  console.log(myobj);

  let mydata = await myobj.json();
  console.log(mydata);

  mydata.map((key) => {
    mytable += `
          <tr >
          <td><input type="text" value="${key.employeeno}" id="eno-${key.id}" readonly></td>
          <td><input type="text" value="${key.name}" id="nm-${key.id}" readonly></td>
          <td><input type="text" value="${key.city}" id="city-${key.id}" readonly></td>
          <td style = "margin-right=10px"><input type="text" value="${key.salary}" id="salary-${key.id}" readonly> </td>\
      
          <td>
          <a href="#" onclick="myrecordRemove('${key.id}')" class="button button-delete">Delete</a>
          <a href="#" onclick="editRow('${key.id}')" id="edit-${key.id}"class="button button-edit">Edit</a>
          <a href="#" onclick="saveRow('${key.id}')" id="save-${key.id}"class="button button-save" style="display: none;">Save</a>
         </td>
         </tr>
  
          `;
  });
  mytable += `</table>`;
  document.getElementById("demo").innerHTML = mytable;
}
dataShow();

//Logout................//

function logout() {
  let out = window.confirm("do you want to logout");
  if (out) {
    window.localStorage.clear("information");
    window.open("../Login/index.html");
  } else {
  }
}
