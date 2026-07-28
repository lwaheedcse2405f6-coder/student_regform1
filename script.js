function validateForm() {
    let f = document.getElementById("fname").value;
    let l = document.getElementById("lname").value;
    let e = document.getElementById("email").value;
    let r = document.getElementById("roll").value;
    let p = document.getElementById("password").value;

    if (f=="" || l=="" || e=="" || r=="" || p=="") {
        alert("Please fill all fields");
        return false;
    }

    document.getElementById("msg").innerHTML = "Thanks for Registering!";
    return false;
}