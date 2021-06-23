let email = document.getElementById("email");
let button = document.getElementById('submit-button');
let errorMess = document.getElementById("error-message");
let form = document.getElementById("form");


document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
})(), true);

email.addEventListener("input", function (event) {
    errorMess.classList.remove("show-hide");
    email.classList.remove("red-border");
});
button.addEventListener("click", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("");
      errorMess.classList.add("show-hide");
        email.classList.toggle("red-border");
    } else if (email.validity.valueMissing){
        email.setCustomValidity("");
        setTimeout(function(){ errorMess.classList.remove("show-hide")}, 3500);
        setTimeout(function(){ email.classList.remove("red-border")}, 3500);
      errorMess.classList.add("show-hide");
      email.classList.toggle("red-border");
    
    } else {
      email.setCustomValidity("");
    }
  });