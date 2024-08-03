const inputMl = document.getElementById("email");
const inputPw = document.getElementById("password");
const button = document.getElementById("button");
console.log(inputMl);
console.log(inputPw)
console.log(button);

button.addEventListener("click", () => {
    const setMl = inputMl.value;
    localStorage.setItem("email", setMl);
    const setPw = inputPw.value;
    localStorage.setItem("password", setPw);
    inputMl.value = ""
    inputPw.value = ""
})

window.addEventListener("load", () => {
    const getMl = localStorage.getItem("email");
    inputMl.value = getMl
    const getPw = localStorage.getItem("password");
    inputPw.value = getPw
})