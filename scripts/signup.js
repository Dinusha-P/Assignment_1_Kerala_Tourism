let fname=document.getElementById("fname");
let email=document.getElementById("email");
let error=document.getElementById("error");
function validate(){
    if(fname.value=="" || fname.value.trim()==""){
        NameError.innerHTML="name can not be empty";
        NameError.style.color="red";

        if(email.value=="" || email.value.trim()==""){
            error.innerHTML="email can not be empty";
            error.style.color="red";
            return false;
        }
    return false;
    }
    // if(regexp.test(email.value)){
    //     error.innerHTML="Valid email id";
    //     error.style.color="green";
    //     return true;
    // }
    // else{
    //     error.innerHTML="Invalid email id";
    //     error.style.color="red";
    //     return false;
    // }
}

//email validation
    // timeout before a callback is called
    let timeout2;

    let emailValid = document.getElementById('emailValid');
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    function emailChecker(EmailParameter){

        if(regexp.test(EmailParameter)){
            emailValid.style.color = 'green';
            emailValid.textContent = 'Valid email id';
        }
        else{
            emailValid.style.color = 'red';
            emailValid.textContent = 'Inalid email id!!';
        }
    }

    email.addEventListener("input", () => {

        //The badge is hidden by default, so we show it
        emailValid.style.display= 'block'
        clearTimeout(timeout2);

        //We then call the StrengChecker function as a callback then pass the typed password to it

        timeout2 = setTimeout(() => emailChecker(email.value), 500);

        //Incase a user clears the text, the badge is hidden again

        if(email.value.length !== 0){
            emailValid.style.display != 'block'
        } else{
            emailValid.style.display = 'none'
        }
    });


//Show Password
function ShowPassword() {
    var x = document.getElementById("PassEntry");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function ShowPassword1() {
    var x = document.getElementById("retype");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  
// timeout before a callback is called

    let timeout;

    // traversing the DOM and getting the input and span using their IDs

    let password = document.getElementById('PassEntry');
    let strengthBadge = document.getElementById('StrengthDisp');
    let pwBar =document.getElementById('progress');
    let strengthBadge1 = document.getElementById('progressbar');

    // The strong and weak password Regex pattern checker

    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))');
  
    function StrengthChecker(PasswordParameter){
        // We then change the badge's color and text based on the password strength

        if(strongPassword.test(PasswordParameter)) {
            strengthBadge.style.color = "green";
            strengthBadge.textContent = 'Strong';
            pwBar.style.background = "green";
            pwBar.style.width = "100%";
        } else if(mediumPassword.test(PasswordParameter)){
            strengthBadge.style.color = 'orange';
            strengthBadge.textContent = 'Medium';
            pwBar.style.background = "orange";
            pwBar.style.width = "60%";
        } else{
            strengthBadge.style.color = 'red';
            strengthBadge.textContent = 'Weak';
            pwBar.style.background = "red";
            pwBar.style.width = "20%";
        }
    }

    //pw validation
    // Adding an input event listener when a user types to the  password input 
    password.addEventListener("input", () => {

        //The badge is hidden by default, so we show it
        strengthBadge1.style.display= 'block'
        strengthBadge.style.display= 'block'
        clearTimeout(timeout);

        //We then call the StrengChecker function as a callback then pass the typed password to it

        timeout = setTimeout(() => StrengthChecker(password.value), 500);

        //Incase a user clears the text, the badge is hidden again

        if(password.value.length !== 0){
            strengthBadge.style.display != 'block'
        } else{
            strengthBadge.style.display = 'none'
        }
    });

// Password confirmation
    // timeout before a callback is called
    let timeout1;

    let retype = document.getElementById('retype');
    let pwMatch = document.getElementById('pwMatch');

    function PwChecker(PasswordParameter1){
        if(password.value==PasswordParameter1){
            pwMatch.style.color = 'green';
            pwMatch.textContent = 'password matched';
        }
        else {
            pwMatch.style.color = 'red';
            pwMatch.textContent = 'please enter same password!';
        }

    }

    // Adding an input event listener when a user types to the confirm password input 
    retype.addEventListener("input", () => {

        //The badge is hidden by default, so we show it
        pwMatch.style.display= 'block'
        clearTimeout(timeout1);

        //We then call the StrengChecker function as a callback then pass the typed password to it

        timeout1 = setTimeout(() => PwChecker(retype.value), 500);

        //Incase a user clears the text, the badge is hidden again

        if(retype.value.length !== 0){
            pwMatch.style.display != 'block'
        } else{
            pwMatch.style.display = 'none'
        }
    });

