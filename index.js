const form = document.getElementById('newsletter_form');
const email = document.getElementById('email');
const errorLabel = document.getElementById("error_message");
const spanForEmail = document.getElementById("correct-email");

const dismissButton = document.getElementById('dismiss-btn');
console.log(dismissButton);

const mainDisplay = document.getElementById('main_display');
const successDisplay = document.getElementById('success_display');


const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email) && email.length > 0;
};

email.addEventListener('input', (e) => {
    errorLabel.style.display = "none";
    email.classList.remove('input-error');
});

const handleSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    const isValid = validateEmail(data.email)

    if (!isValid) {
        errorLabel.style.display = "block";
        email.classList.add('input-error');
        return;
    }

    spanForEmail.innerText = data.email;
    mainDisplay.style.display = "none";
    successDisplay.style.display = "block";
};

dismissButton.addEventListener('click', (e) => { 
    const currentWidth = window.innerWidth;
    successDisplay.style.display = "none";
    
    if (currentWidth >= 1000) { 
        mainDisplay.style.display = "flex";
    } else {
        mainDisplay.style.display = "block";
    }

    email.value = "";
    email.classList.remove('input-error');
    errorLabel.style.display = "none";
});

form.addEventListener('submit', handleSubmit);