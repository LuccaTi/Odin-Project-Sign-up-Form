const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const form = document.getElementById("main-form");

function validateAndStylePasswords() {
    const passValue = passwordInput.value;
    const confirmPassValue = confirmPasswordInput.value;

    if (passValue.length > 0 && confirmPassValue.length > 0) {
        if (passValue === confirmPassValue) {
            passwordInput.classList.add("valid-password");
            confirmPasswordInput.classList.add("valid-password");
            passwordInput.classList.remove("invalid-password");
            confirmPasswordInput.classList.remove("invalid-password");
            confirmPasswordInput.setCustomValidity("");
        } else {
            passwordInput.classList.add("invalid-password");
            confirmPasswordInput.classList.add("invalid-password");
            passwordInput.classList.remove("valid-password");
            confirmPasswordInput.classList.remove("valid-password");
            confirmPasswordInput.setCustomValidity("Passwords don't match!");
        }
    } else {
        passwordInput.classList.remove("valid-password", "invalid-password");
        confirmPasswordInput.classList.remove("valid-password", "invalid-password");

        if (confirmPassValue.length === 0) {
            confirmPasswordInput.setCustomValidity("");
        }
    }
}

passwordInput.addEventListener("input", validateAndStylePasswords);
confirmPasswordInput.addEventListener("input", validateAndStylePasswords);

form.addEventListener("submit", (event) => {
    // Previne o comportamento padrão de enviar o formulário
    event.preventDefault();

    // Se chegou aqui, o HTML já validou os outros campos
    console.log("Formulário válido!");
    window.open("https://www.google.com.br", "_blank");
});