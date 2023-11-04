
document.getElementById("user").innerHTML = localStorage.getItem("textvalue");


var validNumber = false;
var regex = /^[0-9]+$/;
var num1 = document.getElementById("num1");
var num2 =document.getElementById("num2");
num1.addEventListener("input", validate);
num2.addEventListener("input", validate);
function validate(e) {

    var value = e.target.value;
    console.log(value);
    var type = this.id;
    var em = "error_" + type;

    switch (type) {
        case "num1":
    if (!value.trim().match(regex)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
    }
    else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validNumber = true;
    }
    break;
    case "num2":
    if (!value.trim().match(regex)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
    }
    else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validNumber = true;
    }
    break;
}}

    function Operation(operand) {

        var n1 = parseInt(document.getElementById('num1').value);
        var n2 = parseInt(document.getElementById('num2').value);
        var result = 0;

        switch (operand) {
            case 'Add': result = ((n1, n2) => { return n1 + n2; })(n1, n2); break;
            case 'Subtract': result = ((n1, n2) => { return n1 - n2; })(n1, n2); break;
            case 'Multiply': result = ((n1, n2) => { return n1 * n2; })(n1, n2); break;
            case 'Divide': result = ((n1, n2) => { return n1 / n2; })(n1, n2); break;
        }
        myform.result.value = result;
        myform.result.disabled = true;
    }
