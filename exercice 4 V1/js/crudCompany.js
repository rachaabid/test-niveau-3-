function createCompany(event) {
  event.preventDefault();
  var companyName = document.getElementById('companyName');
  var adress = document.getElementById('adress');
  var email = document.getElementById('email');
  var employee = document.getElementById('employee');


  var isValidated = true;

  if (companyName.value == "") {
    companyName.classList.add('is-invalid');
    companyName.classList.remove('is-valid');
    isValidated = false;
  }
  else {
    companyName.classList.add('is-valid');
    companyName.classList.remove('is-invalid');
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

  if (email.value == "" || email.value.indexOf('@') == -1) {
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');
    isValidated = false;
  }
  else {
    email.classList.add('is-valid');
    email.classList.remove('is-invalid');
  }

  if (employee.value == "") {
    employee.classList.add('is-invalid');
    employee.classList.remove('is-valid');
    isValidated = false;
  }
  else {
    employee.classList.add('is-valid');
    employee.classList.remove('is-invalid');
  }

  if (isValidated == true) {
    let companys = JSON.parse(localStorage.getItem("companys")) || [];
    let id = Math.random().toString(36).substring(2);
    const company = {
      id: id,
      companyName: companyName.value,
      adress: adress.value,
      email: email.value,
      employee: employee.value
    }
    companys.push(company);
    localStorage.setItem("companys", JSON.stringify(companys));
    
    window.open('listCompany.html', '_blank');
  }
}
let companys = JSON.parse(localStorage.getItem("companys")) || [];
function afficheListCompany() {
  let list = "";
  companys.forEach((element, i) => {
    list += ` <tr>
  <th>${i + 1}</th>
  <th>${element.companyName}</th>
  <th>${element.adress}</th>
  <th>${element.email}</th>
  <th><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${element.id}">Update</button></th>
  <th><button type="button" class="btn btn-danger" onclick="deleteItem(${i})">Delete</button></th>
</tr>
  `
  });
  document.getElementById('tabCompanys').innerHTML = list;
}

function deleteItem(x) {
  companys.splice(x, 1);
  localStorage.setItem("companys", JSON.stringify(companys));
  afficheListCompany();
}

var id;
function updateItem(y) {
  let company = companys.find(company => company.id == y);
  document.getElementById('companyName').value = company.companyName;
  document.getElementById('adress').value = company.adress;
  document.getElementById('email').value = company.email;
  document.getElementById('employee').value = company.employee; 
  id = y;
}

function save() {
  let company = companys.find(company => company.id == id);
  company.companyName = document.getElementById('companyName').value;
  company.adress = document.getElementById('adress').value;
  company.email = document.getElementById('email').value;
  company.employee = document.getElementById('employee').value;

  localStorage.setItem("companys", JSON.stringify(companys));
  window.location.reload();
}

function showEmployee(){
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  let options = "";
  employees.forEach(element=>{
  options+=` <option value="${element.id}">${element.firstName}</option>`
  });
  document.getElementById("employee").innerHTML = options;
}