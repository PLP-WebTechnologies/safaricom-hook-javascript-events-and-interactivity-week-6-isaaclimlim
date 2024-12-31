// Button Interactive 
document.addEventListener("DOMContentLoaded", () => {
    const signUpButton = document.querySelector(".buttonStarted");
    const signUpForm = document.querySelector(".signUp");
    const successModal = document.querySelector("#successModal");
    const closeModal = document.querySelector("#closeModal");

    signUpForm.style.display = "none";

    signUpButton.addEventListener("click", () => {
        signUpForm.style.display = "block";
        signUpButton.style.display = "none";
    });

    // Form Validation 
    

    signUpForm.onsubmit = function(event) {
        event.preventDefault();

        const fullName = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value;
        const selectOption = document.querySelector("#socialMedia").value;
        const checkBox = document.querySelector("#agree").checked;
    
        const submitButton = document.querySelector(".submit");
    
        const fullNameError = document.querySelector(".nameError");
        const emailError = document.querySelector(".emailError");
        const passwordError = document.querySelector(".passwordError");
        const selectError = document.querySelector(".optionError");
        const checkboxError = document.querySelector(".agreeError");

        let isValid = true;

        // Reset error messages
        fullNameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        selectError.textContent = "";
        checkboxError.textContent = "";

        // Validate Full Name
        if (fullName.length < 5) {
            fullNameError.textContent = "Full Name must be at least 5 characters long";
            isValid = false;
        }

        // Validate Email
        if (email === "") {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate Password
        const passwordPattern = /(?=.*\d).{8,}/;
        if (!passwordPattern.test(password)) {
            passwordError.textContent = "Password must be at least 8 characters long.";
            isValid = false;
        }

        // Validate Select Option
        if (selectOption === "") {
            selectError.textContent = "Please select an option";
            isValid = false;
        }

        // Validate Checkbox
        if (!checkBox) {
            checkboxError.textContent = "Please agree to the terms and conditions";
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            submitButton.onclick = function () {
                signUpForm.style.display = "none";
                successModal.style.display = "block";
                closeModal.onclick = function () {
                    successModal.style.display = "none";
                    signUpForm.style.display = "block";
                    signUpButton.style.display = "none";
                }
            }
            
        }
            
          

    }

})

    





   

    






