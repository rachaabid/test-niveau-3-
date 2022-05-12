function createEmployee(event) {
  event.preventDefault();
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');
  var adress = document.getElementById('adress');
 
  var isValidated = true;

  if (firstName.value == "") {
    firstName.classList.add('is-invalid');
    firstName.classList.remove('is-valid');
    isValidated = false;
  }
  else {
    firstName.classList.add('is-valid');
    firstName.classList.remove('is-invalid');
  }

  if (lastName.value == "") {
    lastName.classList.add('is-invalid');
    lastName.classList.remove('is-valid');
    isValidated = false;
  }
  else {
    lastName.classList.add('is-valid');
    lastName.classList.remove('is-invalid');
  }

  if (email.value == "" || email.value.indexOf('@') == -1) {
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');
    isValidated = false;
  }
  else {
    email.classList.add('is-valid');
    email.classList.remove('is-invalid');
  }

  if (adress.value == "") {
    adress.classList.add('is-invalid');
    adress.classList.remove('is-valid');
    isValidated = false;
  }
  else {
    adress.classList.add('is-valid');
    adress.classList.remove('is-invalid');
  }

  if (isValidated == true) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let id = Math.random().toString(36).substring(2);
    const employee = {
      id: id,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      adress: adress.value
    }
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    
    window.open('listEmployee.html', '_blank');
  }
}
let employees = JSON.parse(localStorage.getItem("employees")) || [];
function afficheListEmployee() {
  let listEmployee = "";
  employees.forEach((element, i) => {
    listEmployee += ` <tr>
  <th>${i + 1}</th>
  <th>${element.firstName}</th>
  <th>${element.lastName}</th>
  <th>${element.email}</th>
  <th>${element.adress}</th>
  <th><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${element.id}">Update</button></th>
  <th><button type="button" class="btn btn-danger" onclick="deleteItem(${i})">Delete</button></th>
</tr>
  `
  });
  document.getElementById('tabEmployees').innerHTML = listEmployee;
}

function deleteItem(x) {
  employees.splice(x, 1);
  localStorage.setItem("employees", JSON.stringify(employees));
  afficheListEmployee();
}

var id;
function updateItem(y) {
  let employee = employees.find(employee => employee.id == y);
  document.getElementById('firstName').value = employee.firstName;
  document.getElementById('lastName').value = employee.lastName;
  document.getElementById('email').value = employee.email;
  document.getElementById('adress').value = employee.adress;  
  id = y;
}

function save() {
  let employee = employees.find(employee => employee.id == id);
  employee.firstName = document.getElementById('firstName').value;
  employee.lastName = document.getElementById('lastName').value;
  employee.email = document.getElementById('email').value;
  employee.adress = document.getElementById('adress').value;
 
  localStorage.setItem("employees", JSON.stringify(employees));
  window.location.reload();
}

