function validateForm() {
    let service = document.forms["myform"]["service"].value;
    let name = document.forms["myform"]["name"].value;
    let email = document.forms["myform"]["email"].value;
    let petName = document.forms["myform"]["petName"].value;
    let phone = document.forms["myform"]["phone"].value;
    let petType = document.forms["myform"]["petType"].value;
    let location = document.forms["myform"]["location"].value;
    let address = document.forms["myform"]["address"].value;
    let zipCode = document.forms["myform"]["zipCode"].value;
    let message = document.forms["myform"]["message"].value;

    if (x == "soul") {
      alert("Name must have an email");
      return false;
    }
}

function serviceSelection() {
    let getOthers = document.getElementById("serviceItem");
    if(getOthers.value === "Other") {
        document.getElementById("others").style.display = "block"
    } else {
        document.getElementById("others").style.display = "none"
    }
}




  