//Title constructor function that creates a Title object


function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

window.addEventListener("load", function() {

  let tr = document.getElementsByClassName("dropDownTextArea");
  
  for (let i = 0; i < tr.length; i++) {
  tr[i].hidden = true;
  }

  let table = document.getElementById("myTable");
  
disableSubmitButton();

});

var t = new Title("CONNECT WITH ME!");
var enableSubmit = new Boolean(false);
var checkboxElems = document.querySelectorAll("input[name=checkbox]");


/* To Add new Student */

function addNewStudent()
{ 
  try{
  let table = document.getElementById("myTable");
  let totalRowCount = table.rows.length; 
  let tbodyRowCount = table.tBodies[0].rows.length; 
  let newRow = parseInt(totalRowCount);
  let row = table.insertRow(newRow);

  //Creating cells to insert into the row
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  let cell7 = row.insertCell(6);
  let cell8 = row.insertCell(7);
  
  let rowNumberDetail =  parseInt((totalRowCount+1)/2);
  // var cell2 = row.insertCell(1);
  cell1.innerHTML = '<tr><td><input type="checkbox" name="checkbox" onclick="checkBoxCheckedUnchecked(this)"/><br /><br /><img class = "down" src="down.png" width="25px" onclick="dropDown(this)"/></td>';
  cell2.innerHTML = '<td>Student '+rowNumberDetail+'</td>';
  cell3.innerHTML = '<td>Teacher '+rowNumberDetail+'</td>';
  cell4.innerHTML = '<td>Approved</td>';
  cell5.innerHTML = '<td>Fall</td>';
  cell6.innerHTML = '<td>TA</td>';
  cell7.innerHTML = '<td>12345</td>';
  cell8.innerHTML = '<td>100%</td>';
  
  let row2 = table.insertRow(newRow + 1);

  row2.innerHTML = '<tr class="dropDownTextArea";"><td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td></tr>';
  
  table.rows[newRow+1].hidden = true;

  
  checkboxElems = document.querySelectorAll("input[name=checkbox]");

  //On successful creation of Student record creting a popup window
  window.confirm("Record added successfully ");
  }
  catch {
    //if creation of student record failed..showing a failed message
    window.confirm("record addition failed");
  }

}



//To Show and hide the dropDownTextArea row
function dropDown(element){
  let rowJavascript = element.parentNode.parentNode;
  let res = parseInt(rowJavascript.rowIndex);
  let table = document.getElementById("myTable");


if(table.rows[res+1].hidden === true)
{
  table.rows[res+1].hidden = false;
}
else{
  table.rows[res+1].hidden = true;
}
  
}


//Function created to disable and greyout the submit button
function disableSubmitButton(){
  let button = document.getElementById("button");
  button.disabled = true;
  button.style.backgroundColor = "grey";
}


function checkBoxCheckedUnchecked(element){
  let tr = element.parentNode.parentNode;

  checkboxElems = document.querySelectorAll("input[name=checkbox]");

if(element.checked === true){
  tr.style.backgroundColor = "yellow";
 
  let button = document.getElementById("button");
  if(button.disabled == true)
  {
  button.disabled = false;
  button.style.backgroundColor = "";
  button.style.backgroundColor = "orange";
  }
  addHeaders();
  modifyTableonCheckbox(element,tr);
}
else{
  tr.style.backgroundColor = "";
  let table = document.getElementById("myTable");

  enableSubmit = new Boolean(false);

  /* to check atleast one checked is checked */
  for (var i = 0; i < checkboxElems.length; i++) {
    if(checkboxElems[i].checked == true)
    { 
      enableSubmit =new Boolean(true);
    }
  }

  // if there is atleast one checkbox cheked
  if(enableSubmit === true){
    button.disabled = false;
  button.style.backgroundColor = "";
  button.style.backgroundColor = "orange";
  }
  else{
    disableSubmitButton();
    removeHeaders();
  }
  
  modifyTableonCheckbox(element,tr);
  
}

}

//Function for Adding or Removing new Buttons
function modifyTableonCheckbox(element,argtr)
{
let table = document.getElementById("myTable");
let tr = argtr;


if(element.checked == true)
{

  if(parseInt(tr.cells.length) < 10)
{
let cell9 = tr.insertCell(8);
let cell10 = tr.insertCell(9);

cell9.innerHTML = '<td><button onclick="deleteRow(this)">Delete</button></td></tr>';
cell10.innerHTML = '<td><button onclick = "editRow()">Edit</button></td></tr>';
  }
}
else {
  if(parseInt(tr.cells.length) > 8)
  tr.deleteCell(9);
  tr.deleteCell(8);
 
}
}

//Function for Adding new headers
function addHeaders()
{
  let table = document.getElementById("myTable");

  //Checking header are already created
  if(parseInt(table.rows[0].cells.length) < 10)
  {
 
  let cell9 = table.rows[0].insertCell(8);
  let cell10 = table.rows[0].insertCell(9);

  cell9.innerHTML =  '<th>DELETE</th>';
  cell10.innerHTML =  '<th>EDIT</th>';
  
  cell9.style.color = "white";
  cell9.style.backgroundColor = '#a7c942'
  cell9.style.fontWeight = 'bold';

  cell10.style.color = "white";
  cell10.style.backgroundColor = '#a7c942'
  cell10.style.fontWeight = 'bold';

  }

}

//Function for removing new headers 
function removeHeaders()
{
  let table = document.getElementById("myTable");

  //Checking for headers
  if(parseInt(table.rows[0].cells.length) > 8 && enableSubmit == false)
  {
    table.rows[0].deleteCell(9);
    table.rows[0].deleteCell(8);
  }

}

/* Function to delete row on the click*/
function deleteRow(element){
try{
let tr = element.parentNode.parentNode;//

let indextoDelete = parseInt(tr.rowIndex);
document.getElementById("myTable").rows[indextoDelete].remove();

checkboxElems = document.querySelectorAll("input[name=checkbox]");
enableSubmit = new Boolean(false);

  for (var i = 0; i < checkboxElems.length; i++) {
    if(checkboxElems[i].checked == true)
    { 
      enableSubmit =new Boolean(true);
    }
  }
  disableSubmitButton();
  removeHeaders();

  window.confirm("Record deleted successfully. ");
}
catch{
  window.confirm("Record deletion failed. ");
}

}


//Display a popup to edit
function editRow(element)
{  
  window.confirm('Edit the details');

}