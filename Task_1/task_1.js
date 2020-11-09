
function validate(){
    var pass1 = document.getElementById("passwd");
    var pass2 = document.getElementById("passwdchk");
    var valid = document.getElementById("validation");
    //valid.innerHTML = pass1.value;
    if (pass1.value == pass2.value){
        if((String(pass1.value).length >= 8)){
            valid.innerHTML = "Valid";
        } else{
            valid.innerHTML = "invalid length";
        }
    } else {
        valid.innerHTML = "passwords do not match";
    }
}