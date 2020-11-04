const form = document.getElementById('form');
const usrename = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//All functions
//This function is to show error
function showError(input,message) {
const formControl = input.parentElement;
formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innerText = message;

}
// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
    }
//Function to check Email Validation
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Function to check if required field has data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if (input.value === ''){
            showError(input,`${getInputId(input)} is required`)
        }
    });
}
//Function to get id of the input field and show proper case
function getInputId(input){
return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
    
//This is a event listener for form submit
form.addEventListener('submit',function(e){
    e.preventDefault();
    
 checkRequired([username,email,password,password2]);
})