const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#email');
const fnameError = document.querySelector('#fname');
const lnameError = document.querySelector('#lname');
const pwdError = document.querySelector('#pwd');

form.addEventListener('submit', function (event) {
        // if the email field is valid, we let the form submit
    
        if(!email.validity.valid || email.validity.typeMismatch || !fnameError.validity.valid || !lnameError.validity.valid || pwdError.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
    
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});


function showError () {
      if (fnameError.validity.valueMissing)
      {
        fnameError.className = 'error active';
        document.getElementById("fname").placeholder = "";
        document.querySelectorAll(".error-logo")[0].style.visibility = "visible";
        document.querySelectorAll("small")[0].style.visibility = "visible";
      }
      if (lnameError.validity.valueMissing)
      {
        lnameError.className = 'error active';
        document.getElementById("lname").placeholder = "";
        document.querySelectorAll(".error-logo")[1].style.visibility = "visible";
        document.querySelectorAll("small")[1].style.visibility = "visible";
      }
      if (emailError.validity.valueMissing || emailError.validity.typeMismatch)
      {
        document.getElementById("email").value = "";
        emailError.className = 'error active';
        document.getElementById("email").placeholder = "email@example/com";
        document.querySelectorAll(".error-logo")[2].style.visibility = "visible";
        document.querySelectorAll("small")[2].style.visibility = "visible";
        
        const style = document.createElement("style")
        style.type = "text/css";
        const {
          sheet
        } = document.head.appendChild(style)
        
        const rule = sheet.insertRule("::placeholder {}")
        const placeholderStyle = sheet.rules[rule].style;
        placeholderStyle.color = "hsl(0, 100%, 74%) ";
      
      }
      if (pwdError.validity.valueMissing)
      {
        pwdError.className = 'error active';
        document.getElementById("pwd").placeholder = "";
        document.querySelectorAll(".error-logo")[3].style.visibility = "visible";
        document.querySelectorAll("small")[3].style.visibility = "visible";
      }
}