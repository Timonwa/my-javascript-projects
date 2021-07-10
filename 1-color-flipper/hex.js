const changeBackground = document.getElementById("flex");
const color = document.getElementById("color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let randomNumberValue;



color.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        randomNumberValue = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomNumberValue];
    };
    color.textContent = hexColor;
    changeBackground.style.background = color.textContent;
});