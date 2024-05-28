const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "#E49BFF";
    myBox.textContent = "OUCH 🤕";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "#850F8D";
    myBox.textContent = "DON'T DO IT 😡";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "#F8F9D7";
    myBox.textContent = "CLICK ME 😁";
});