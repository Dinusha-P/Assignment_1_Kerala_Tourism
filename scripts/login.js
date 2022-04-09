const form = document.getElementsByTagName('form')[1];
// traversing the DOM and getting the input and span using their IDs
let email=document.getElementById("email");
let password = document.getElementById('PassEntry');
let emailValid = document.getElementById('emailValid');
let strengthBadge = document.getElementById('StrengthDisp');
let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
// The strong and weak password Regex pattern checker
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
let check=document.getElementById('check');

form.addEventListener('submit', function (event) {
    // if all fields are valid, we let the form submit
    if (!validate()) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});

function validate()
{
    if((validateEmail()&validatePassword()&validateEmail2()&validatePassword1())==1)
    {
        alert("Log In Successful.");
        return true;
    }

    return false;
}

function validateEmail(){
    if(email.value.trim()===""){
        emailValid.textContent="email can not be empty!";
        emailValid.style.color="red";
        emailValid.style.display= 'block';
        return false;
    }
    return true;
  }

function validateEmail2(){
    if(regexp.test(email.value))
    {
        return true;
    }
    return false;
  }

  function validatePassword(){
    if(password.value.trim()===""){
        strengthBadge.textContent="Please enter a password!";
        strengthBadge.style.color="red";
        strengthBadge.style.display= 'block'
        return false;
    }
    return true;
  }
  function validatePassword1(){
    if(password.value.trim()!="" && !strongPassword.test(password.value))
    {
        strengthBadge.style.display= 'block'
        strengthBadge.textContent="Password strength is not strong enough!";
        return false;
    }

    return true;
  }

  //email validation
    // timeout before a callback is called
    let timeout2;
    function emailChecker(EmailParameter){

        if(regexp.test(EmailParameter)){
            emailValid.textContent = '';
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

        //We then call the emailChecker function as a callback then pass the typed email to it

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


var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
// When the user clicks on the password field, show the message box
password.onfocus = function() {
document.getElementById("message").style.display = "block";
}


// When the user starts to type something inside the password field
password.onkeyup = function() {
// Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if(password.value.match(lowerCaseLetters)) {  
  letter.classList.remove("invalid");
  letter.classList.add("valid");
} else {
  letter.classList.remove("valid");
  letter.classList.add("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(password.value.match(upperCaseLetters)) {  
  capital.classList.remove("invalid");
  capital.classList.add("valid");
} else {
  capital.classList.remove("valid");
  capital.classList.add("invalid");
}

// Validate numbers
var numbers = /[0-9]/g;
if(password.value.match(numbers)) {  
  number.classList.remove("invalid");
  number.classList.add("valid");
} else {
  number.classList.remove("valid");
  number.classList.add("invalid");
}

// Validate length
if(password.value.length >= 8) {
  length.classList.remove("invalid");
  length.classList.add("valid");
} else {
  length.classList.remove("valid");
  length.classList.add("invalid");
}
}
// timeout before a callback is called

let timeout;

// traversing the DOM and getting the input and span using their IDs


function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.textContent = "";
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.textContent = "";
    } else{
        strengthBadge.textContent = "";
    }
}

    //pw validation
    // Adding an input event listener when a user types to the  password input 
    password.addEventListener("input", () => {

        //The badge is hidden by default, so we show it
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