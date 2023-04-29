const input = document.querySelector(".main__intro-form-input");
const error = document.querySelector(".main__intro-form-error");
const submit = document.querySelector(".main__intro-form-button");

function validateEmail() {
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const email = input.value;

    if (!emailPattern.test(email)) {
        error.classList.add("active");
        input.style.border = "1px solid red";
    } else {
        error.classList.remove("active");
        input.style.border = "1px solid black";
    }
}

submit.addEventListener("click", function(event){
    event.preventDefault();
    validateEmail();
});