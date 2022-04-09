 const form = document.getElementsByTagName('form')[1];
 // traversing the DOM and getting the input and span using their IDs
let fname=document.getElementById("fname");
let email=document.getElementById("email");
let NameError=document.getElementById("NameError");
let password = document.getElementById('PassEntry');
let emailValid = document.getElementById('emailValid');
let phone = document.getElementById('phone');
let phoneValid = document.getElementById('phoneValid');
let strengthBadge = document.getElementById('StrengthDisp');
let retype = document.getElementById('retype');
let pwMatch = document.getElementById('pwMatch');
let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
let PhoneFormat = new RegExp('^([0-9]{10}$)|([0-9]{3}[\.][0-9]{3}[\.][0-9]{4}$)|([0-9]{3}[\-]?[0-9]{3}[\-][0-9]{4}$)|([0-9]{3}[ ][0-9]{3}[ ][0-9]{4})$');
let phonelHelp=document.getElementById('phonelHelp');
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
    if((validateName()&validateEmail()&validatePhone()&validatePassword()&validateCnfPw()&validateEmail2()&validatePhone1()&validatePassword1()&validateCnfPw2())==1)
    {
        
        return validateCheckbox();
    }

    return false;
}
function validateCheckbox(){
    if(check.checked==false)
    {
        alert("Please indicate that you have read and agree to Terms and Conditions");
        return false;
    }
    return true;
  }
function validateName(){
    if(fname.value.trim()===""){
        NameError.textContent="Name can not be empty!";
        NameError.style.color="red";
        NameError.style.display= 'block';
        return false;
    }
    return true;
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

function validatePhone(){
   if(phone.value.trim()===""){
        phoneValid.textContent="Phone number can not be empty!";
        phoneValid.style.color="red";
        phoneValid.style.display= 'block'
        return false;
    }
    return true;
}  
function validatePhone1(){
    if(PhoneFormat.test(phone.value))
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
        strengthBadge.textContent="Password strength is not strong enough!";
        return false;
    }

    return true;
  }
  function validateCnfPw(){
    if(retype.value.trim()==""){
        pwMatch.textContent="Please re-enter password";
        pwMatch.style.color="red";
        pwMatch.style.display= 'block';
        return false;
    }
    return true;
  }    
  function validateCnfPw2(){
    if(password.value==retype.value)
    {
        return true;
    }
    pwMatch.textContent="Please enter same password";
    pwMatch.style.color="red";
    pwMatch.style.display= 'block';
    return false;
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

  
// timeout before a callback is called

    let timeout;

    // traversing the DOM and getting the input and span using their IDs

    let pwBar =document.getElementById('progress');
    let strengthBadge1 = document.getElementById('progressbar');
  
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

    function PwChecker(PasswordParameter1){
        if(password.value==PasswordParameter1){
            pwMatch.textContent = '';
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

        //We then call the PwChecker function as a callback then pass the typed password to it

        timeout1 = setTimeout(() => PwChecker(retype.value), 500);

        //Incase a user clears the text, the badge is hidden again

        if(retype.value.length !== 0){
            pwMatch.style.display != 'block'
        } else{
            pwMatch.style.display = 'none'
        }
    });

// Phone number validation

    // timeout before a callback is called

    let timeout3;

    function PhoneChecker(PhoneParameter){
        if(!PhoneFormat.test(PhoneParameter)) {
            phoneValid.style.color = 'red';
            phoneValid.textContent = 'Please enter a valid phone number';
            phonelHelp.style.display= 'block';
        }
        else
        {
            phoneValid.textContent = '';
            phonelHelp.style.display= 'none';
        }
    }

        // Adding an input event listener when a user types to the  phone input 
        phone.addEventListener("input", () => {

            //The badge is hidden by default, so we show it
            phoneValid.style.display= 'block'
            clearTimeout(timeout3);

            //We then call the phoneChecker function as a callback then pass the typed phone number to it

            timeout3 = setTimeout(() => PhoneChecker(phone.value), 500);

            //Incase a user clears the text, the badge is hidden again

            if(phone.value.length !== 0){
                phoneValid.style.display != 'block'
                phonelHelp.style.display != 'block'
            } else{
                phoneValid.style.display = 'none'
                phonelHelp.style.display = 'none'
            }
        });

// name validation
        function  nameFun(){
            if(fname.value.trim()==""){
                NameError.textContent=""
            } 
            else{
                NameError.textContent=""
            }

        }

    // timeout before a callback is called
    let timeout4;
        fname.addEventListener("input", () => {

            //The badge is hidden by default, so we show it
            NameError.style.display= 'block'
            clearTimeout(timeout3);

            //We then call the NameFun function as a callback then pass the typed name to it

            timeout4 = setTimeout(() => nameFun(phone.value), 500);

            //Incase a user clears the text, the badge is hidden again

            if(fname.value.length !== 0){
                NameError.style.display != 'block'
            } else{
                NameError.style.display = 'none'
            }
        });