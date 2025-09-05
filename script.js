const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generator = document.getElementById("generator");
const length = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const allCharacters = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    for (let i = 4; i < length; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password;
}

copyBtn.addEventListener("click", () => {
    if (passwordBox.value) {
        navigator.clipboard.writeText(passwordBox.value);
        copyBtn.innerText = "Copied";
        setTimeout(() => {
            copyBtn.innerText = "Copy";
        }, 2000);
    }
});