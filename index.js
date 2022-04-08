const email = document.querySelector("#email");
const submitBtn = document.querySelector("#submit");
const errorMessage = document.querySelector("#error-message");


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value === "" || !email.value.match(emailFormat)) {
        email.classList.add("error");
        errorMessage.style.display = "block";
    } 
})



// REMOVE ERROR IF USER CORRECTS INPUT

email.addEventListener("focus", () => {
    if(email.classList.contains("error")) {
        email.classList.remove("error");
        errorMessage.style.display = "none";
    }
})